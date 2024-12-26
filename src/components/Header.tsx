import "/src/styles/Header.css";
import "/src/styles/App.css";
import BGvideo from "/src/assets/images/BGvideo.mp4";

interface HeaderProps {
  img: string;
  title: string;
  text: string;
}
export default function Header({ img, title, text }: HeaderProps) {
  return (
    <>
      <header>
        <div className="overlay"> </div>
        <div className="background-video">
          <video className="video" src={BGvideo} autoPlay loop muted />
        </div>
        <div className="background-video2">
          <video className="video2" src={BGvideo} autoPlay loop muted />
        </div>
        <div className="content">
          <img className="logo" alt="logo du site" src={img} />
          <h1 className="main-title">{title}</h1>
        </div>
        <p className="text">{text}</p>
      </header>
    </>
  );
}
