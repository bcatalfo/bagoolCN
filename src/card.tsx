export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 w-full border border-gray-100 bg-white shadow-lg p-6 rounded-md">
      {children}
    </div>
  );
}
