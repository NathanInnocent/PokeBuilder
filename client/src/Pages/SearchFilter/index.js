import { TYPE_ICON } from "../../Helpers/Icons";

export const SearchFilterPage = () => {
 return (
  <>
   {/* First Container */}
   <div>
    <h1>Search by type</h1>
    <button>
     <p>Normal</p>
     <img src={TYPE_ICON.normal} />
    </button>
   </div>
  </>
 );
};
