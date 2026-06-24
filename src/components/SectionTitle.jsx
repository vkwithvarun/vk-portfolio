export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 dark:text-gray-500 text-sm tracking-wide">{subtitle}</p>
      )}
      <div className="w-14 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mt-3" />
    </div>
  );
}