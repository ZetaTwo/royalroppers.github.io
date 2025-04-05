const About = function () {
  return (
    <div className="pt-2 px-3 flex flex-col">
      <p className="default-text text-justify m-auto text-xl max-w-3xl p-2">
        RoyalRoppers is a Swedish student CTF team. We regularly play CTFs of
        all difficulty levels and have members ranging from absolute beginners
        to very experienced players. The majority of us live in Stockholm and we
        sometimes meet up to play CTFs onsite at KTH. Check out our ranking and
        past results on{" "}
        <a className="text-[#f9c867]" href="https://ctftime.org/team/176008">
          our CTFTime page
        </a>
        .
      </p>
      <p className="text-center pt-3 pb-3 default-text text-2xl">
        Want to play CTFs with us?{" "}
        <a
          className="text-[#f9c867] underline underline-offset-2"
          href="https://forms.gle/uVaYpFLjF7a6JGGC7"
        >
          Submit an application
        </a>
      </p>
    </div>
  );
};

export default About;
