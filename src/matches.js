// Match data

export const upcomingMatches = [
  {
    matchId: 1,
    teamA: "BHA",
    teamAName: "Brighton & Hove Albion",
    teamB: "TOT",
    teamBName: "Tottenham Hotspur",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Brighton_and_Hove_Albion_FC_crest.svg/380px-Brighton_and_Hove_Albion_FC_crest.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/240px-Tottenham_Hotspur.svg.png",
    date: "2024-10-06T21:00:00",
    points: 1500,
  },
  {
    matchId: 2,
    teamA: "MUN",
    teamAName: "Manchester United",
    teamB: "BRE",
    teamBName: "Brentford",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/400px-Manchester_United_FC_crest.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/360px-Brentford_FC_crest.svg.png",
    date: "2024-10-19T19:30:00",
    points: 1200,
  },
  {
    matchId: 3,
    teamA: "BOU",
    teamAName: "AFC Bournemouth",
    teamB: "ARS",
    teamBName: "Arsenal",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/AFC_Bournemouth_%282013%29.svg/300px-AFC_Bournemouth_%282013%29.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/360px-Arsenal_FC.svg.png",
    date: "2024-10-19T22:00:00",
    points: 1600,
  },
  {
    matchId: 4,
    teamA: "WOL",
    teamAName: "Wolverhampton Wanderers",
    teamB: "MCI",
    teamBName: "Manchester City",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Wolverhampton_Wanderers_FC_crest.svg/400px-Wolverhampton_Wanderers_FC_crest.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/380px-Manchester_City_FC_badge.svg.png",
    date: "2024-10-20T18:30:00",
    points: 1300,
  },
  {
    matchId: 5,
    teamA: "LIV",
    teamAName: "Liverpool",
    teamB: "CHE",
    teamBName: "Chelsea",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/360px-Liverpool_FC.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/380px-Chelsea_FC.svg.png",
    date: "2024-10-20T21:00:00",
    points: 1500,
  },
  {
    matchId: 6,
    teamA: "LEI",
    teamAName: "Leicester City",
    teamB: "NFO",
    teamBName: "Nottingham Forest",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/380px-Leicester_City_crest.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/220px-Nottingham_Forest_F.C._logo.svg.png",
    date: "2024-10-26T00:30:00",
    points: 1200,
  },
  {
    matchId: 7,
    teamA: "BHA",
    teamAName: "Brighton & Hove Albion",
    teamB: "WOL",
    teamBName: "Wolverhampton Wanderers",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Brighton_and_Hove_Albion_FC_crest.svg/380px-Brighton_and_Hove_Albion_FC_crest.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Wolverhampton_Wanderers_FC_crest.svg/400px-Wolverhampton_Wanderers_FC_crest.svg.png",
    date: "2024-10-26T19:30:00",
    points: 1400,
  },
];

// Live matches data usually coming from a database
export const liveMatches = [
  {
    matchId: 100,
    teamA: "BRE",
    teamAName: "Brentford",
    teamB: "WOL",
    teamBName: "Wolverhampton Wanderers",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Brentford_FC_crest.svg/360px-Brentford_FC_crest.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Wolverhampton_Wanderers_FC_crest.svg/400px-Wolverhampton_Wanderers_FC_crest.svg.png",
    date: "",
    scoreA: 1,
    scoreB: 2,
    status: "live",
    points: 1500,
  },
];

export const completedMatches = [
  {
    matchId: 100,
    teamA: "TOT",
    teamAName: "Tottenham Hotspur",
    teamB: "ARS",
    teamBName: "Arsenal",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Tottenham_Hotspur.svg/240px-Tottenham_Hotspur.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/360px-Arsenal_FC.svg.png",
    date: "2024-09-15T21:00:00",
    scoreA: 0,
    scoreB: 1,
    status: "completed",
    points: 1500,
  },
  {
    matchId: 101,
    teamA: "LEI",
    teamAName: "Leicester City",
    teamB: "NFO",
    teamBName: "Nottingham Forest",
    teamAImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Leicester_City_crest.svg/380px-Leicester_City_crest.svg.png",
    teamBImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e5/Nottingham_Forest_F.C._logo.svg/220px-Nottingham_Forest_F.C._logo.svg.png",
    date: "2024-09-30T00:30:00",
    scoreA: 2,
    scoreB: 1,
    status: "completed",
    points: 1200,
  },
];
