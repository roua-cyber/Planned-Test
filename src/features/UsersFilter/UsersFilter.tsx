import React, { FC, useCallback, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { styles } from "../../Styles";

type UsersFilterProps = {};

const UsersFilter: FC<UsersFilterProps> = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);

  const { fetchUsers, error } = useContext(UserContext);

  const handleFetchUsers = useCallback(
    async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      await fetchUsers({ Min: min, Max: max });
    },
    [fetchUsers, max, min]
  );
  return (
    <form className="form-group" onSubmit={handleFetchUsers}>
      <div style={styles.FormContainer as React.CSSProperties}>
        <input
          type="text"
          placeholder="Min"
          className="form-control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMin(parseInt(e.target.value))
          }
        />
        <input
          type="text"
          placeholder="Max"
          className="form-control"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setMax(parseInt(e.target.value))
          }
        />
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <button type="submit" className="btn btn-success rounded-pill">
          Retrieve users
        </button>
      </div>
    </form>
  );
};

export default React.memo(UsersFilter);
