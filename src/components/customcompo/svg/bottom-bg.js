const BottomBgColor = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 280"
      style={{
        width: "100%",
        height: "auto",
        position: "fixed",
        bottom: 0,
      }}
      id="bottom-svg">
      <defs>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#005AAB", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#39B54A", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad2)"
        fillOpacity="1"
        d="M0,224L26.7,224C53.3,224,107,224,160,213.3C213.3,203,267,181,320,154.7C373.3,128,427,96,480,112C533.3,128,587,192,640,213.3C693.3,235,747,213,800,170.7C853.3,128,907,64,960,58.7C1013.3,53,1067,107,1120,117.3C1173.3,128,1227,96,1280,80C1333.3,64,1387,64,1413,64L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
    </svg>
  );
};

export default BottomBgColor;
