import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'İsim alanı zorunludur.'],
        maxlength: [20, 'İsim alanı en fazla 20 karakter olabilir.'],
        minlength: [2, 'İsim alanı en az 2 karakter olabilir.']
    },
    lastName: {
        type: String,
        required: [true, 'Soyisim alanı zorunludur.'],
        maxlength: [20, 'Soyisim alanı en fazla 20 karakter olabilir.'],
        minlength: [2, 'Soyisim alanı en az 2 karakter olabilir.']
    },
    email: {
        type: String,
        required: [true, 'Email alanı zorunludur.'],
        unique: true,
        maxlength: [40, 'Email alanı en fazla 40 karakter olabilir.'],
        minlength: [5, 'Email alanı en az 5 karakter olabilir.'],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Lütfen geçerli bir email adresi giriniz.']
    },
    username: {
        type: String,
        required: [true, 'Kullanıcı adı alanı zorunludur.'],
        unique: true,
        maxlength: [20, 'Kullanıcı adı alanı en fazla 20 karakter olabilir.'],
        minlength: [4, 'Kullanıcı adı alanı en az 5 karakter olabilir.']
    },
    password: {
        type: String,
        required: [true, 'Şifre alanı zorunludur.'],
        maxlength: [20, 'Şifre alanı en fazla 20 karakter olabilir.'],
        minlength: [8, 'Şifre alanı en az 8 karakter olabilir.'],
        match: [/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/, 'Şifreniz en az 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter içermelidir.'],
        select: false
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
    },
    isActive: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    title: String,
    about: String,
    place: String,
    website: String,
    profile_image: {
        type: String,
        default: 'default.jpg'
    },
    coverImage: {
        type: String,
        default: 'default-cover.jpg'
    },
    blocked: {
        type: Boolean,
        default: false
    },
    blockedBy: {
        type: String
    },
    blockedAt: {
        type: Date
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    }
});

UserSchema.methods.makePassword = function(password){
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

UserSchema.pre("save", function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = this.makePassword(this.password);
    next();
})

UserSchema.pre('deleteOne', { document: false, query: true }, async function() {
    const doc = await this.model.findOne(this.getFilter());
    await Comment.deleteMany({ author: doc._id });
});

export default mongoose.models.User || mongoose.model('User', UserSchema);