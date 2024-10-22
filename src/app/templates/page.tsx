import Card from "@/components/card";

export default function Templates() {

    return (
        <>
          <div className="bg-[#E6F2F0] h-full w-full p-6">
            <div className="grid grid-cols-12 ">
              <div className="col-span-3 pe-3">
                {Array(8)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`mb-4 py-2 px-3 flex justify-between items-center w-full ${
                        index === 0 ? "bg-[#F8FDFC]" : ""
                      } rounded-xl`}
                    >
                      <h4 className="text-[15px]">Promotional</h4>
                      <h4 className="bg-[#008069] text-[15px] rounded-2xl font-bold px-3 text-white">
                        12
                      </h4>
                    </div>
                  ))}
                <h4 className="text-[15px] text-[#888282]">More</h4>
              </div>
              <div className="col-span-9">
                <div className="grid grid-cols-3 gap-4">
                  {Array(8)
                    .fill(0)
                    .map((_, index) => (
                      <Card
                        key={index}
                        title="Promotional"
                        badgeText="Festival"
                        button="Preview"
                        description="Hey [Name], looking to elevate your [business/service]? Let us help you with [specific offering]! Special offer for a limited time. Don't miss out! Contact us at [Contact Info] now!"
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )
}
  
