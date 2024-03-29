// modules
import { useAppSelector } from "../../../app/hooks.ts";
// components
import HeroTemplate from "../../../UI/Hero/HeroTemplate";
import SharedButton from "../../../UI/Buttons/SharedButton.tsx";

interface Props extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Hero: React.FC<Props> = ({ ...props }) => {
   const dataStudio = useAppSelector((state) => state.getHeroStudio.data)!;
   const { studioNumber } = useAppSelector((state) => state.getContacts.data)!;

   const texts = {
      header: dataStudio.title,
      paragraph: dataStudio.text,
   };

   return (
      <HeroTemplate video={dataStudio.video} text={texts} {...props}>
         <SharedButton whatsapp={studioNumber} classname="studioHeroButton" text="Записаться на пробный урок" />
      </HeroTemplate>
   );
};

export default Hero;
