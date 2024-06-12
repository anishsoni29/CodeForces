// see https://erdos.sdslabs.co/problems specifically the list of problems

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
    // The first div sould probably be a reusable component for layouting
    <div className="my-8 flex items-center justify-center h-screen">
      <div className="shadow-md bg-gray-50 px-4 py-4">
        <div className="flex justify-between mb-8 font-semibold text-lg ">
          <div className="flex gap-8">
            <div className="w-1/3">ID</div>
            <div className="w-1/3">Problem </div>
          </div>
          <div className="w-1/3">Recently Solved</div>
        </div>

        {/* Rows */}
        {problemList.map((item) => (
          // ROW
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 bg-white p-4 shadow-sm rounded-md"
          >
            <div className="flex gap-16 w-1/3">
              <div>{item.id}</div>
              <div>
                <div className="text-xl mb-2">{item.problemName}</div>
                <TagContainer tags={item.tags} />
              </div>
            </div>
            <div className="w-1/3 text-lg">
              <span className="text-gray-400">Last submission: </span>{" "}
              {"Anish"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};