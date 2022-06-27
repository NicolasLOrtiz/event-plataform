import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../../graphql/generated";

export const Sidebar = () => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] border-l border-gray-600 bg-gray-900 p-6">
      <span className="mb-6 block border-b border-gray-500 pb-6 text-2xl font-bold">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons?.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            type={lesson?.type}
            availableAt={new Date(lesson.availableAt)}
          />
        ))}
      </div>
    </aside>
  );
};
