/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

function App() {
  const [close, setClose] = useState(false);

  const checkDrag = (e) => {
    console.log(e.screenY);

    if (e.screenY < 80) {
      setClose(true);
    }
  };
  return (
    <>
      <motion.div
        animate={close ? { translateY: 500, scaleX: 0.9 } : 0}
        transition={{ stiffness: 140, damping: 30, type: "spring" }}
        style={{
          backgroundColor: "transparent",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <motion.div
          initial={
            close
              ? {
                  translateY: -15,
                  borderTopRightRadius: 50,
                  borderTopLeftRadius: 50,
                }
              : {
                  translateY: 45,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                }
          }
          animate={
            close
              ? {
                  translateY: 45,
                  borderTopRightRadius: 30,
                  borderTopLeftRadius: 30,
                }
              : {
                  translateY: -15,
                  borderTopRightRadius: 50,
                  borderTopLeftRadius: 50,
                }
          }
          transition={{ delay: 1, stiffness: 540, damping: 40, type: "spring" }}
          style={{
            zIndex: 0,
            width: "250px",
            height: "75px",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            backgroundColor: "rgb(172, 172, 172)",
          }}
        >
          <motion.div
            initial={
              close ? { height: 30, bottom: -30 } : { height: 0, bottom: 0 }
            }
            animate={
              close ? { height: 0, bottom: 0 } : { height: 30, bottom: -30 }
            }
            transition={{
              delay: 1,
              stiffness: 540,
              damping: 40,
              type: "spring",
            }}
            style={{
              zIndex: 0,
              position: "absolute",
              width: "250px",
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderTopRightRadius: 0,
              background:
                "linear-gradient(rgb(155, 151, 151), rgb(110, 108, 108))",
              borderTopLeftRadius: 0,
              right: 0,
            }}
          ></motion.div>
        </motion.div>
        <motion.div
          initial={close ? { height: 25, top: 95 } : { height: 0, top: 95 }}
          animate={close ? { height: 0, top: 95 } : { height: 25, top: 95 }}
          transition={{ delay: 1, stiffness: 540, damping: 40, type: "spring" }}
          style={{
            zIndex: 8,
            position: "absolute",
            width: "250px",
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            background: "linear-gradient(rgb(112, 112, 112), rgb(92, 87, 87))",
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 0,
            right: 0,
          }}
        ></motion.div>
        <motion.div
          initial={close ? { translateY: 45 } : { translateY: 0 }}
          animate={close ? { translateY: 0 } : { translateY: 45 }}
          transition={{ delay: 1, stiffness: 540, damping: 40, type: "spring" }}
          style={{
            backgroundColor: "rgb(172, 172, 172)",
            position: "relative",
            zIndex: 10,
            width: "250px",
            height: "175px",
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderTopRightRadius: 0,
            borderTopLeftRadius: 0,
          }}
        ></motion.div>
      </motion.div>

      <motion.div
        onDrag={(e) => checkDrag(e)}
        drag="y"
        dragPropagation
        dragSnapToOrigin
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.25}
        draggable
        initial={{ translateY: 10 }}
        animate={{ translateY: 0 }}
        transition={{
          delay: 1.25,
          stiffness: 540,
          damping: 40,
          type: "spring",
        }}
        style={{
          zIndex: 9,
          position: "absolute",
          top: 260,
          width: 250,
          height: "auto",
          cursor: "move",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: "bolder",
            fontFamily: "Poppins",
            userSelect: "none",
            textShadow: "0 15px 20px rgb(0, 0, 0, 1)",
            margin: 0,
            padding: 0,
          }}
        >
          Pull Me Out!
        </span>
        <p
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "normal",
            fontFamily: "Poppins",
            userSelect: "none",
            margin: 0,
            padding: 0,
          }}
        >
          Subscribe and like.
        </p>
      </motion.div>
    </>
  );
}

export default App;
