const AboutComponent = () => {
    return (
        <section className=" flex flex-col items-center justify-center mt-32 ">
            <h1 className="text-[#C8C6AF] text-6xl font-bold">من نحن </h1>
            <div className="md:w-[80%] lg:w-[90%] w-[90%] h-[100%] bg-[#C8C6AF] my-10 md:p-20 lg:p-20 p-3 text-center text-[#1C4233]" >
                <h3 className="md:text-4xl lg:text-4xl text-2xl font-bold">فلافل وزنة الوجهة المثالية لعشاق الفلافل</h3>
                <p className="md:text-3xl lg:text-3xl text-xl md:px-32 lg:px-32 px-3 font-semibold pt-5 pb-32 md:leading-loose lg:leading-loose ">حيث يمكنك الاستمتاع بتجربة نكهات بلا مثيل يقوم طهاتنا
                    الخبراء بتحضير كل طبق بدقة وشغف ليصنعوا تناغم
                    النكهات المثالي لنأخذك في عالم من الطعم الشهي والأجواء
                    الفاخرة، إن تحضيرنا المتفرد للفلافل وخياراتنا الواسعة
                    في هذا المجال تمنحكم تجربة تذوق لا تنسى بخدمة استثنائية</p>
            </div>
            <img src="/images/about-mid.png" className="hidden md:block w-52 absolute left-2 top-64" alt="" />
            <img src="/images/about-mid.png" className="hidden md:block w-52 absolute right-2 top-96" alt="" />
            <img src="/images/about-bottom.png" className="md:w-[500px] lg:w-[500px] w-[350px] md:-mt-64 lg:-mt-64 -mt-44" alt="" />

        </section>
    )
}

export default AboutComponent;