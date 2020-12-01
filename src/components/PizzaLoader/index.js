import ContentLoader from "react-content-loader";

const PizzaLoader = () => {
  return (
    <ContentLoader
      className={"pizza-block"}
      speed={2}
      width={260}
      height={460}
      viewBox="0 0 260 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="130" cy="116" r="109" />
      <rect x="0" y="243" rx="3" ry="3" width="260" height="30" />
      <rect x="0" y="287" rx="3" ry="3" width="260" height="84" />
      <rect x="2" y="395" rx="0" ry="0" width="80" height="26" />
      <rect x="136" y="386" rx="21" ry="21" width="124" height="43" />
    </ContentLoader>
  )
}

export default PizzaLoader;
