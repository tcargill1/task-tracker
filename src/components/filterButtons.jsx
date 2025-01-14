// Button for filtering task list based on completion status
const FilterButton = ( {filter} ) => {

    // Displays filter to taskList component
    return (
        <div class="filterButton">
            <p>Current filter: {filter}</p>
        </div>
    );
};

export default FilterButton;