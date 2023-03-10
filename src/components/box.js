import styled from "styled-components";

const Box = styled.div`
	height: 100%;
	width: ${(pros) => (pros.width ? "100%" : "380px")};
	display: flex;
	flex-direction: column;

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export default Box;
