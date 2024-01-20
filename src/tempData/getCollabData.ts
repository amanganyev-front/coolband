export default (
   resolve: (
      arg0: { src: Promise<typeof import("*.png")>; alt: string; firstName: string; lastName: string }[],
   ) => void,
) => {
   resolve([
      {
         src: import("/src/assets/collaborationImages/Aktan.png"),
         alt: "Актан",
         firstName: "Актан",
         lastName: "Исабаев",
      },
      {
         src: import("/src/assets/collaborationImages/Alexander.png"),
         alt: "Александр Волкодав",
         firstName: "Александр",
         lastName: "Волкодав",
      },
      {
         src: import("/src/assets/collaborationImages/Jax.png"),
         alt: "Jax",
         firstName: "Jax",
         lastName: "",
      },
      {
         src: import("/src/assets/collaborationImages/Eazy.png"),
         alt: "Eazy",
         firstName: "Eazy",
         lastName: "",
      },
      {
         src: import("/src/assets/collaborationImages/Freeman.png"),
         alt: "Freeman 996",
         firstName: "Freeman 996",
         lastName: "",
      },
      {
         src: import("/src/assets/collaborationImages/kga.png"),
         alt: "Симфонический оркестр",
         firstName: "КГА Симфонический оркестр им.А.Джумахматова",
         lastName: "",
      },
      {
         src: import("/src/assets/collaborationImages/Qarash.png"),
         alt: "Qarash Lab",
         firstName: "Qarash Lab",
         lastName: "",
      },
      {
         src: import("/src/assets/collaborationImages/Orkestr.png"),
         alt: "Оркестр театра Оперы и Балета",
         firstName: "Оркестр театра Оперы и Балета",
         lastName: "",
      },
      {
         src: import("/src/assets/collaborationImages/BigBand.png"),
         alt: "Bishkek Big Band",
         firstName: "Bishkek Big Band",
         lastName: "",
      },
   ]);
};
