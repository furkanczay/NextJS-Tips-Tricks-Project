import mongoose from "mongoose";
import slugify from "@/helpers/slugGenerator";
import Comment from "./Comment";

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
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, "En az bir kategori eklenmesi gerekir."]
    }],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Kullanıcı alanı zorunludur."]
    },
}, { toJSON: { virtuals: true } });

ArticleSchema.methods.makeSlug = function () {
    const slug = slugify(this.title);
    return slug;
}
ArticleSchema.pre('save', function (next) {
    if (!this.isModified('title')) {
        next();
    }
    this.slug = this.makeSlug();
    next();
});

ArticleSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'article',
    justOne: false
});

ArticleSchema.virtual('comments_count', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'article',
    count: true
})

ArticleSchema.pre('deleteOne', { document: false, query: true }, async function() {
    const doc = await this.model.findOne(this.getFilter());
    await Comment.deleteMany({ article: doc._id });
});

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);
