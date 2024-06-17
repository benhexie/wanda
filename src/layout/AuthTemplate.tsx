import { ReactNode } from "react";

const AuthTemplate = ({
  title,
  description,
  image,
  nextText,
  next,
  children,
}: {
  title: string;
  description?: string;
  image: any;
  nextText: string;
  next: () => void;
  children: ReactNode;
}) => {
  return (
    <div className="flex gap-8 h-full max-w-5xl w-full flex-col sm:flex-row">
      <div className="flex-1 sm:flex-[0.5] flex flex-col order-2 sm:order-1">
        <div className="flex flex-col gap-8 max-w-96 py-12 -mt-4 sm:-mt-0">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {description && <h3 className="text-2xl font-semibold text-gray-500 -mt-2">{description}</h3>}
          {children}
          <button onClick={next} className="bg-secondary bg-opacity-20 p-4 text-base font-semibold text-secondary mt-12">
            {nextText}
          </button>
        </div>
      </div>
      <div className="sm:flex-[0.5] sm:block order-1 sm:order-2">
        <img src={image} alt="Auth image" className="w-full h-48 sm:h-full sm:min-h-96 max-h-[120rem] rounded-lg object-cover" />
      </div>
    </div>
  );
};

export default AuthTemplate;
