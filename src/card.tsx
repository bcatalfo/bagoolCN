export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full border border-gray-100 bg-white shadow-lg p-6 rounded-md">
      {children}
    </div>
  );
}
