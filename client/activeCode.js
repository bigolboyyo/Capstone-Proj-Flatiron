// {errors.map((e, i) => {
//     return <h1>{e}</h1>;
//   })}

// useEffect(() => {
//   if (!user) {
//     navigate("/login");
//   } else {
//     navigate("/homepage");
//   }
// }, [user, navigate]);

// import testpic from "../../Images/patrick_star.png";
/* <img src={testpic} alt=""></img> */

// const whoAmI = async () => {
//   const req = await fetch("/me");
//   const res = await req.json();
//   console.log(res);
// };

// const charFilled = characters.map((c, i) => {
//   return <CharacterFilled char={c} idx={i} />;
// });

///////////////////////////////////////////

const allTypeWriters = JSON.parse(localStorage.getItem("stories")).map(
  (story) => {
    return (
      <Typewriter
        options={{
          delay: 10,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(story.dialogue).start();
        }}
      />
    );
  }
);

const storyLineId = JSON.parse(
  localStorage.getItem("user_data")
).current_storyline;

const returnActive = () => {
  const activeType = allTypeWriters.find(() => storyLineId);

  return activeType;
};

// useEffect(() => {
//   returnActive();
// }, [storyLineId]);
