import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from "react";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100px" },
};

function App() {
  //motionValue = React Rendering Cycle을 발동시키지 않음
  //Component가 재랜더링 되지 않음.
  const x = useMotionValue(0);
  const scaleMotion = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  return (
    <Wrapper>
      <Box style={{ x, scale: scaleMotion }} drag="x" dragSnapToOrigin />

    </Wrapper>
  );
}

export default App;