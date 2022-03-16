import { AuthProvider } from "./Auth";
import { EventsProvider } from "./Events";
import { UserProvider } from "./User";
import { ItemsListProvider } from "./ItemsList";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <EventsProvider>
          <ItemsListProvider>{children}</ItemsListProvider>
        </EventsProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Provider