import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
      fullname: {
        type: String,
        required: function() { return !this.user; },
      },
      email: {
        type: String,
        required: function() { return !this.user; },
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Lütfen geçerli bir e-posta adresi giriniz.']
      },
      detail: {
        type: String,
        required: [true, 'Yorum alanı zorunludur!'],
        min: [20, 'Yorum en az 20 karakterden oluşmak zorundadır!']
      },
      article: {
        type: mongoose.Types.ObjectId,
        ref: 'Article',
        required: true
      },
      isActive: {
        type: Boolean,
        default: false
      },
      user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: false
      }
})

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);