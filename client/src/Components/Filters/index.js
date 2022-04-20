import { FilterButtons } from "./FilterButtons";
import { MoreFilters } from "./MoreFiltersButton";

export const Filters = () => {
 return (
  <>
   <div style={{ gridTemplateColumns: "repeat(4,1fr)", display: `grid`, gap: "10px", justifyItems: "start" }}>
    <FilterButtons />
    <MoreFilters />
   </div>
  </>
 );
};
