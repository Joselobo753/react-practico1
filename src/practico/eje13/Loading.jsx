import { motion } from "framer-motion"
const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
        <motion.div

            animate = {{rotate: 360}}
            transition= {{repeat: Infinity, duration:1}}
            style={{ width: 100, height: 100, border: "5px solid #adb5bd", borderTop:"5px solid #198754", borderRadius:"50%"}}
        />
        
    </div>
  )
}
export default Loading