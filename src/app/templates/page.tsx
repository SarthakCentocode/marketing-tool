export default function Templates() {
  return (
    <>
      <div className="bg-[#E6F2F0] h-full w-full p-6">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3 pe-3">
            {Array(8)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className={`mb-4 py-2 px-3 flex  justify-between items-center w-full ${
                    index == 0 && "bg-[#F8FDFC]"
                  } rounded-xl`}
                >
                  <h4 className="text-[15px]">Promotional</h4>
                  <h4 className=" bg-[#008069] text-[15px] rounded-2xl font-bold px-3 text-white ">
                    12
                  </h4>
                </div>
              ))}
            <h4 className="text-[15px] text-[#888282] ">More</h4>
          </div>
          <div className="col-span-8">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </>
  );
}
