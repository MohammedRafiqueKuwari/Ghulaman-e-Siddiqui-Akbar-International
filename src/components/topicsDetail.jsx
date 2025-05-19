import { useParams } from 'react-router-dom';

const topics = [
  {
    title: "Introduction",
    content: `Shaykh-ul-Aalam, a revered spiritual leader and humanitarian...`
  },
  {
    title: "Family & Lineage",
    content: `Huzoor descends from a noble lineage...`
  },
  // ... rest of the topics
];

export default function TopicDetail() {
  const { id } = useParams();
  const topic = topics[parseInt(id)];

  if (!topic) return <div className="p-6 text-red-500">Topic not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-yellow-600">{topic.title}</h1>
      <p className="text-lg text-gray-700 whitespace-pre-line">{topic.content}</p>
    </div>
  );
}
