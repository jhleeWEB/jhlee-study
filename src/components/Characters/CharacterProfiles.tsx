import useCharacterProfiles from '@/hooks/useCharacterProfiles';
import React from 'react';
import { useLocation, useParams } from 'react-router';
import { styled } from 'styled-components';

type WrapperType = {
	$url?: string;
};
const Wrapper = styled.section<WrapperType>(({ theme, $url }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	backgroundImage: `url(${$url})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'auto 400px',
	backgroundPosition: '50% 10%',
	height: '200px',
	padding: theme.sizes.gap.m,
}));

const ProfileInfoContainer = styled.div(({ theme }) => ({
	display: 'flex',
	width: '200px',
	flexDirection: 'column',
	justifyContent: 'space-between',
	color: theme.colors.font.default,
}));

const MinorInfoContainer = styled.div(({ theme }) => ({
	fontSize: theme.sizes.font.s,
	fontWeight: theme.sizes.font.weight.l,
	'&>span': {
		backgroundColor: theme.colors.background.light,
		borderRadius: theme.sizes.border.radius.s,
		padding: theme.sizes.gap.xs,
	},
	'&>span:nth-child(1)': {
		marginRight: theme.sizes.gap.s,
	},
}));
const CharacterNameContainer = styled.div(({ theme }) => ({
	fontSize: theme.sizes.font.m,
	fontWeight: theme.sizes.font.weight.l,
	'&>div:nth-child(1)': {
		fontSize: theme.sizes.font.l,
	},
	'&>div:nth-child(2)': {
		color: theme.colors.font.dark,
	},
}));
const LevelInfoContainer = styled.div(({}) => ({
	display: 'flex',
	justifyContent: 'space-between',
}));
const LevelInfo = styled.div(({ theme }) => ({
	'&>div:nth-child(1)': {
		color: theme.colors.font.dark,
		fontSize: theme.sizes.font.s,
	},
	'&>div:nth-child(2)': {
		fontWeight: theme.sizes.font.weight.l,
		fontSize: theme.sizes.font.m,
	},
}));
const OtherInfoContainer = styled.div(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	width: '100px',
	fontSize: theme.sizes.font.s,
}));

const OtherInfo = styled.div(({ theme }) => ({
	'&>span:nth-child(1)': {
		marginRight: theme.sizes.gap.s,
		color: theme.colors.font.dark,
	},
	'&>span:nth-child(2)': {
		fontWeight: theme.sizes.font.weight.l,
		color: theme.colors.font.default,
	},
}));

const CharacterProfiles = () => {
	const { playerId } = useParams();
	const { data, isLoading, isSuccess } = useCharacterProfiles(playerId);

	return (
		<Wrapper $url={data?.characterImage}>
			{isLoading && <div>loading...</div>}
			{isSuccess && (
				<>
					<ProfileInfoContainer>
						<MinorInfoContainer>
							<span>{data.serverName}</span>
							<span>{data.characterClassName}</span>
						</MinorInfoContainer>
						<CharacterNameContainer>
							<div>{data.characterName}</div>
							<div>{data.title}</div>
						</CharacterNameContainer>
						<LevelInfoContainer>
							<LevelInfo>
								<div>아이템</div>
								<div>{data.itemMaxLevel}</div>
							</LevelInfo>
							<LevelInfo>
								<div>전투</div>
								<div>{`Lv.${data.characterLevel}`}</div>
							</LevelInfo>
							<LevelInfo>
								<div>원정대</div>
								<div>{`Lv.${data.expeditionLevel}`}</div>
							</LevelInfo>
						</LevelInfoContainer>
					</ProfileInfoContainer>
					<OtherInfoContainer>
						<div>
							<OtherInfo>
								<span>PVP</span>
								<span>{data.pvpGradeName}</span>
							</OtherInfo>
						</div>
						<div>
							<OtherInfo>
								<span>길드</span>
								<span>{data.guildName || '없음'}</span>
							</OtherInfo>
							<OtherInfo>
								<span>영지</span>
								<span>{data.townName}</span>
								<span>{data.townLevel}</span>
							</OtherInfo>
						</div>
					</OtherInfoContainer>
				</>
			)}
		</Wrapper>
	);
};

export default CharacterProfiles;
