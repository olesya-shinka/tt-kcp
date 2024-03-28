import * as S from "./styles";
import { useNavigate } from "react-router-dom";

function NotFoundContent() {
  const navigate = useNavigate();
  return (
    <S.NotFoundBloc>
      <S.ProblemBig>404</S.ProblemBig>
      <S.Problem>
        <S.ProblemDis>Страница не найдена</S.ProblemDis>
      </S.Problem>
      <S.GoToMainButton
        onClick={() => {
          navigate("/");
        }}
      >
        Вернуться на главную
      </S.GoToMainButton>
    </S.NotFoundBloc>
  );
}

export default NotFoundContent;
