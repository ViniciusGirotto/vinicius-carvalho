import Socials from "./Socials";

const Footer = () => {
  return (
    <footer>
      <div className="bg-secondary py-12">
        <div className="flex flex-col items-center justify-between">
          {/* socials  */}
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconsStyles="text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all"
          />
          {/* copyright  */}
          <div className="text-muted-foreground">
            Copyright &copy; Vinícius Carvalho. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
