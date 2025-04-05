import "./App.css";
import ProfileCard from "./components/Card_component";
function App() {
  return (
    <>
      <ProfileCard
        name="Eren"
        quote="If you win, you live. If you lose, you die. If you don’t fight, you can’t win!"
        image="https://cdn.pixabay.com/photo/2022/12/25/22/45/attack-on-titan-7678035_1280.jpg"
      />
      <ProfileCard
        name="Naruto"
        quote="I'm not gonna run away, I never go back on my word! That’s my nindō: my ninja way!"
        image="https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg"
      />
    </>
  );
}
export default App;
