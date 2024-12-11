import pandas as pd
results_2020 = pd.read_csv("2020_US_County_Level_Presidential_Results.csv")
results_2024 = pd.read_csv("2024_US_County_Level_Presidential_Results.csv")

results_2020['county_fips'] = results_2020['county_fips'].astype(str)
results_2024['county_fips'] = results_2024['county_fips'].astype(str)

# merge the two datasets on 'county_fips'
merged_results = pd.merge(
    results_2024,
    results_2020,
    on="county_fips",
    # we add suffixes so to differetiate the contents from the 2 datasets
    suffixes=("_2024", "_2020")
)

# calculate rate of change for key metrics
merged_results["votes_gop_change"] = (
    (merged_results["votes_gop_2024"] - merged_results["votes_gop_2020"]) 
) 

merged_results["votes_dem_change"] = (
    (merged_results["votes_dem_2024"] - merged_results["votes_dem_2020"]) 
) 

merged_results["total_votes_change"] = (
    (merged_results["total_votes_2024"] - merged_results["total_votes_2020"]) 
) 


merged_results["percentage_change_gop"] = (
    (merged_results["votes_gop_change"]/ merged_results["total_votes_2024"])
) 

merged_results["percentage_change_dem"] = (
    (merged_results["votes_dem_change"]/ merged_results["total_votes_2024"])
) 

merged_results["per_point_diff_change"] = (
    merged_results["per_point_diff_2024"] - merged_results["per_point_diff_2020"]
)

# relevant columns for the output
differences = merged_results[[
    "state_name_2024", "county_fips", "county_name_2024", 
    "votes_gop_change", "votes_dem_change", "percentage_change_gop", "percentage_change_dem", "total_votes_change", "per_point_diff_change"
]]

# name columns for clarity
differences.rename(columns={
    "state_name_2024": "state_name",
    "county_name_2024": "county_name"
}, inplace=True)

# Save the results to a new CSV file
differences.to_csv("differences_2024_2020.csv", index=False)

print("Differences saved to differences_2024_2020.csv.")
