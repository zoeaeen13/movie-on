import { useHistory } from "react-router-dom";
import { removeCards } from '../utils'

export default function useRouter() {
  const history = useHistory()

  const changeRouter = (path) => {
    if (path) {
      removeCards() // 換頁時移除卡片
      history.push(path)
    }
  }

  return { changeRouter }
}