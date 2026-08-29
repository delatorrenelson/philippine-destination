import React from "react";

export default function MarkdownContent({ content }) {
  if (!content) return null;

  // Split lines
  const lines = content.split("\n");

  const parseInline = (text) => {
    // Replace **bold** markers
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={idx} className="font-bold text-gray-900 dark:text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderedElements = [];
  let currentList = [];
  let listType = null;

  const flushList = () => {
    if (currentList.length > 0) {
      if (listType === "ol") {
        renderedElements.push(
          <ol key={`ol-${renderedElements.length}`} className="list-decimal ml-6 space-y-1.5 my-3 text-gray-700 dark:text-gray-300">
            {currentList.map((item, i) => (
              <li key={i}>{parseInline(item)}</li>
            ))}
          </ol>
        );
      } else {
        renderedElements.push(
          <ul key={`ul-${renderedElements.length}`} className="list-disc ml-6 space-y-1.5 my-3 text-gray-700 dark:text-gray-300">
            {currentList.map((item, i) => (
              <li key={i}>{parseInline(item)}</li>
            ))}
          </ul>
        );
      }
      currentList = [];
      listType = null;
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      return;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      renderedElements.push(
        <h3 key={index} className="text-xl font-extrabold text-gray-900 dark:text-white mt-6 mb-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full inline-block" />
          {parseInline(trimmed.slice(4))}
        </h3>
      );
    } else if (trimmed.startsWith("## ")) {
      flushList();
      renderedElements.push(
        <h2 key={index} className="text-2xl font-black text-gray-900 dark:text-white mt-8 mb-3">
          {parseInline(trimmed.slice(3))}
        </h2>
      );
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      if (listType !== "ul") flushList();
      listType = "ul";
      currentList.push(trimmed.slice(2));
    } else if (/^\d+\.\s/.test(trimmed)) {
      if (listType !== "ol") flushList();
      listType = "ol";
      currentList.push(trimmed.replace(/^\d+\.\s/, ""));
    } else {
      flushList();
      renderedElements.push(
        <p key={index} className="my-2.5 leading-relaxed text-gray-700 dark:text-gray-300 text-sm sm:text-base font-normal">
          {parseInline(trimmed)}
        </p>
      );
    }
  });

  flushList();

  return <div className="space-y-1.5 font-sans">{renderedElements}</div>;
}
