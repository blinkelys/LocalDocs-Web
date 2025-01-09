import mongoose, { Schema, Document } from 'mongoose';

interface IDoc extends Document {
  title: string;
  description: string;
  content: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

const DocSchema: Schema = new Schema({
 title: { type: String, required: true },
 description: { type: String, required: true },
 content: { type: String, required: true },
 tags: [{ type: String }],
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: Date.now },
});

const Doc = mongoose.model<IDoc>('Doc', DocSchema);

export default Doc;
