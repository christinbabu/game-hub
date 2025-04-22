import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({score} : Props) => {
    let color = score> 74 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge  fontSize='10px' paddingX={2} borderRadius='4px' colorScheme={color}>{score}</Badge>
  )
}

export default CriticScore