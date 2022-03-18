import { AuthProvider } from "./Auth";
import { EventProvider } from "./Events";
import { UserProvider } from "./User";
import { ItemsListProvider } from "./ItemsList";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <ItemsListProvider>
          <EventProvider>{children}</EventProvider>
        </ItemsListProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Provider