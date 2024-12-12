import pandas as pd
# this is to fix the format ... forgot to add the state...
input_csv = "tooltip_data.csv"
output_csv = "gas_data.csv"

df = pd.read_csv(input_csv, header=None, names=["County", "Price"])
df["State"] = None

# Fill the "State" column based on rows with "State:" prefix
current_state = None
for index, row in df.iterrows():
    if row["County"].startswith("State:"):
        # state name and update current_state
        current_state = row["County"].replace("State:", "").strip()
        df.at[index, "State"] = current_state
    else:
        # the current_state to the row
        df.at[index, "State"] = current_state

df = df[~df["County"].str.startswith("State:")]
df.to_csv(output_csv, index=False)

print(f"Updated CSV saved to {output_csv}")
