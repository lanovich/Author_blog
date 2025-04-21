import { useSelector } from "react-redux";
import { ErrorMessage } from "../error-message/error-message";
import { selectUserRole } from "@/selectors";
import { ERROR_CODE } from "@/bff/constants";
import { checkAccess } from "@/utils";

interface Props {
  serverError?: null | string | boolean;
  access: number[];
  children: React.ReactNode;
}

export const PrivateContent: React.FC<Props> = ({
  serverError = null,
  access,
  children,
}) => {
  const userRole = useSelector(selectUserRole);

  const accessError = checkAccess(access, userRole) ? null : ERROR_CODE.ACCESS_DENIED;
  const error = serverError || accessError;

  return error ? <ErrorMessage>{error}</ErrorMessage> : children;
};
