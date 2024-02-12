import styles from "./_sectionWrapper.module.scss";

const SectionWrapper: React.FC<Prop.SectionWrapper> = ({
   header = "",
   className = "",
   id = "",
   children,
   forwardedRef,
}) => {
   return (
      <section
         ref={forwardedRef}
         className={className + " " + styles.sectionWrapper}
         id={id}
      >
         {header.length > 0 && <h2 className={styles.h2}>{header}</h2>}
         {children}
      </section>
   );
};

export default SectionWrapper;
