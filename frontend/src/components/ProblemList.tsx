import { TagContainer } from "./Tag";

interface ProblemType {
  id: string;
  problemName: string;
  tags: string[];
}

export const ProblemList = ({
  problemList,
}: {
  problemList: ProblemType[];
}) => {

  return (
    <div className="my-8 flex items-center justify-center min-h-screen ">
      <div className="shadow-lg bg-white p-6 rounded-lg w-full max-w-4xl">
        <div className="flex justify-between mb-6 font-semibold text-xl text-gray-700">
          <div className="flex gap-8 justify-center ">
            <div className="w-1/3 ml-2">ID</div>
            <div className="w-1/3 ml-[10rem]">Problem</div>
          </div>
          <div className="w-1/3">Recently Solved</div>
        </div>

        {problemList.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 bg-gray-50 p-4 shadow-sm rounded-md hover:bg-gray-100 transition-colors"
          >
            <div className="flex gap-8 w-2/3">
              <div className="w-1/3">{item.id}</div>
              <div className="w-2/3">
                <div className="text-lg font-medium text-gray-800 mb-1">{item.problemName}</div>
                <TagContainer tags={item.tags} />
              </div>
            </div>
            <div className="w-1/3 text-gray-600">
              <span className="text-gray-500">Last submission: </span>Anish
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
