import mongoose from "mongoose";
import slugify from "@/helpers/slugGenerator";

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Kategori adı alanı zorunludur.'],
        unique: true
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
});

CategorySchema.methods.makeSlug = function () {
    return slugify(this.name);
}
CategorySchema.pre('save', function (next) {
    if (!this.isModified('name')) {
        next();
    }
    this.slug = this.makeSlug();
    next();
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);