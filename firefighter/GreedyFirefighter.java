package ethankelly.graphs.fire;

/*****
*
* Firefighter defence uses Greedy algorithm (1/2 approx. for optimal solution)
*
* @author Ethan Kelly
* e.kelly.1@research.gla.ac.uk
*
*****/

import java.util.Arrays;
import java.util.Random;

public class GreedyFirefighter extends Graph {

	public static int[][] state;

	public GreedyFirefighter(int numVertices) {
		super(numVertices);
	}

	// Choose a random vertex selection for outbreak of fire
	public static int outbreak(int numVertices) {
		int start = new Random().nextInt(numVertices);

		System.out.println("Fire starts at: " + start);
		return start;
	}

// Initialise 2D array for state
	public static int[][] initialState(int numVertices, int start, int turnCount) {
		int[][] state = new int[numVertices][turnCount + 1];

		for (int n = 0; n <= turnCount; n++) {
			state[start][n] = 2;
		}

		// 0 -> open; 1 -> defended; 2 -> burning.

		return state;
	}

// Determine which vertices burn
	public static int[] burn(int[][] state, int turnCount) {
		int[] burningVertices = new int[numVertices];

		if (turnCount % 2 != 0) {
			// TODO Make this an exception!
			System.out.println("Not an even numbered turn, cannot burn adjacent vertices");
		} else
			for (int i = 0; i < numVertices; i++) {
				for (int j = 0; j < numVertices; j++) {
					if (state[i][turnCount - 1] == 2) {
						burningVertices[i] = 1;
						if (state[j][turnCount - 1] == 0 && getEdge(i, j) == true) {
							burningVertices[j] = 1;
						}
					}
				}
			}
		int[] previouslyBurning = new int[numVertices];
		for (int k = 0; k < numVertices; k++) {
			if (state[k][turnCount - 1] == 2) {
				previouslyBurning[k] = 1;
			}
		}

		if (Arrays.equals(burningVertices, previouslyBurning)) {
			Arrays.fill(burningVertices, -1);
		}

		return burningVertices;

	}

// Update the state of the graph given what is currently burning
	public static int[][] updateStateBurning(int[][] state, int[] toBurn, int turnCount) {
		int[][] updatedBurning = new int[numVertices][turnCount + 1];
		for (int i = 0; i < numVertices; i++) {
			for (int j = 0; j < turnCount; j++) {
				updatedBurning[i][j] = state[i][j];
				updatedBurning[i][j + 1] = state[i][j];
			}
		}

		for (int i = 0; i < numVertices; i++) {
			for (int j = 0; j < numVertices; j++) {
				// If something is previously burned or defended, ensure all following
				// incidences also that state
				if (toBurn[i] == 1) {
					if (getEdge(i, j) == true) {
						updatedBurning[j][turnCount] = 2;
					}
				}
			}
		}

		// System.out.print(Arrays.deepToString(updatedBurning));
		return updatedBurning;
	}

// Choose which vertex to defend each odd turnCount
	public static int defence(int[][] state, int turnCount) {
		int defendVertex = 0;
		int[] possibleWeights = weightsArray(adjMatrix);

		if (turnCount % 2 == 0) {
			// TODO Make this an exception!
			System.out.println("Not an odd numbered turn, cannot defend");
		} else
			for (int i = 0; i < numVertices; i++) {
				if (state[i][turnCount - 1] != 0) {
					possibleWeights[i] = 0;
				}
				defendVertex = largestWeight(possibleWeights);
			}
		for (int j = 0; j < numVertices; j++) {
			if (getEdge(defendVertex, j) == true) {
				removeEdge(defendVertex, j);
			}
		}
		if (possibleWeights[defendVertex] == 0) {
			defendVertex = numVertices + 1;
		} else {
			System.out.println("Defending heaviest possible vertex: " + defendVertex);
		}
		return defendVertex;
	}

// Update the state of the graph given defence information
	public static int[][] updateStateDefence(int[][] state, int defend, int turnCount) {

		int[][] updatedDefence = new int[numVertices][turnCount + 1];
		for (int i = 0; i < numVertices; i++) {
			for (int j = 0; j < turnCount; j++) {
				updatedDefence[i][j] = state[i][j];
				updatedDefence[i][j + 1] = state[i][j];
			}
		}

		for (int k = turnCount; k <= turnCount; k++) {
			updatedDefence[defend][k] = 1;
			// Only update what has been defended
		}
		// System.out.println(Arrays.deepToString(updatedState));
		return updatedDefence;

	}

	public static void printMatrix(int[][] matrix) {
		// Loop through all rows
		for (int[] row : matrix)

			// convert each row to string and then printing in a separate line
			System.out.println(Arrays.toString(row));
	}

// Main method	
	public static void main(String[] args) {
		// Define graph g
		int numVertices = 4;
		Graph g = new Graph(numVertices);

		// Add edges between vertices
		g.addEdge(0, 1);
		g.addEdge(0, 2);
		g.addEdge(1, 2);
		g.addEdge(2, 0);
		g.addEdge(2, 3);

		// Print adjacency matrix
		System.out.println("Initial graph:");
		System.out.print(g.toString());

		int turnCount = 0;
		int start = outbreak(numVertices);
		int[][] state = initialState(numVertices, start, turnCount);
		System.out.println("Initial state of play: ");
		printMatrix(state);
		turnCount++;

		for (int c = turnCount; c < numVertices * 10; c++) {
			System.out.println("---- Turn Count: " + c + " ----");
			if (c % 2 == 1) {
				int defend = defence(state, c);
				if (defend > numVertices) {
					System.out.println("No defensive moves can be made; game over.");
					break;
				} else {
					int[][] newState = updateStateDefence(state, defend, c);
					System.out.println("After defence: ");
					printMatrix(newState);
					state = newState;
				}

			} else {
				int[] toBurn = burn(state, c);
				int[] comparator = new int[numVertices];
				Arrays.fill(comparator, -1);
				if (Arrays.equals(toBurn, comparator)) {
					System.out.println("No vertices can be burned; game over.");
					break;
				} else {

					System.out.print("Burning: ");
					for (int i = 0; i < numVertices; i++) {
						if (toBurn[i] == 1) {
							System.out.print(i + " ");
						}
					}
					System.out.println();
					int[][] newState = updateStateBurning(state, toBurn, c);
					System.out.println("After burning: ");
					printMatrix(newState);
					state = newState;
				}

			}
		}
	}
}
