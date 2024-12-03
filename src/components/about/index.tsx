const AboutComponent = () => {
    return (
        <section className=" flex flex-col items-center justify-center mt-32">
            <h1 className="text-[#C8C6AF] text-6xl font-bold">من نحن </h1>
            <div className="w-[80%] h-[100%] bg-[#C8C6AF] my-10 p-20 text-center text-[#1C4233]" >
                <h3 className="text-4xl font-bold">فلافل وزنة الوجهة المثالية لعشاق الفلافل</h3>
                <p className="text-3xl px-32 font-semibold leading-loose pt-5 pb-32">حيث يمكنك الاستمتاع بتجربة نكهات بلا مثيل يقوم طهاتنا
                    الخبراء بتحضير كل طبق بدقة وشغف ليصنعوا تناغم
                    النكهات المثالي لنأخذك في عالم من الطعم الشهي والأجواء
                    الفاخرة، إن تحضيرنا المتفرد للفلافل وخياراتنا الواسعة
                    في هذا المجال تمنحكم تجربة تذوق لا تنسى بخدمة استثنائية</p>
            </div>
            <img src="/images/about-mid.png" className="w-52 absolute left-10 top-64" alt="" />
            <img src="/images/about-mid.png" className="w-52 absolute right-10 top-96" alt="" />
            <img src="/images/about-bottom.png" className="w-[500px] -mt-64" alt="" />

        </section>
    )
}

export default AboutComponent;