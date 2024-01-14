import mongoose from "mongoose";
import slugify from "@/helpers/slugGenerator";

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Başlık alanı zorunludur.'],
        minlength: [5, 'Başlık alanı en az 5 karakter olabilir.'],
        unique: true
    },
    content: {
        type: String,
        required: [true, 'İçerik alanı zorunludur.'],
        minlength: [20, 'İçerik alanı en az 20 karakter olabilir.']
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    },
    featuredImage: {
        type: String,
        default: 'default-featured.jpg'
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Kullanıcı alanı zorunludur."]
    },
    tags: {
        type: Array,
        
    }
});

ArticleSchema.methods.makeSlug = function () {
    const slug = slugify(this.title);
}
ArticleSchema.pre('save', function (next) {
    if (!this.isModified('title')) {
        next();
    }
    this.slug = this.makeSlug();
    next();
});

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);
