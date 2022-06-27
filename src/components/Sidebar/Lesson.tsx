import React from "react";

import { CheckCircle, Lock } from "phosphor-react";
import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export const Lesson: React.FC<LessonProps> = ({
  title,
  slug,
  availableAt,
  type,
}) => {
  const { slug: slugPath } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(availableAt);
  const availableAtFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === slugPath;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableAtFormatted}</span>
      <div
        className={`mt-2 rounded border border-gray-500 p-4 group-hover:border-green-500 ${
          isActiveLesson && "bg-green-500"
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`flex items-center gap-2 text-sm font-medium text-blue-500 ${
                isActiveLesson && "text-white"
              }`}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={`rounded border border-green-300 py-[0.125rem] px-2 text-xs font-bold text-white ${
              isActiveLesson && "border-white"
            }`}
          >
            {type === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>

        <strong
          className={`mt-5 block text-gray-200 ${
            isActiveLesson && "text-white"
          }`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
};
