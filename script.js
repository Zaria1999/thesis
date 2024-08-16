var dayOfTheMonth = document.getElementsByClassName("day-of-the-month")[0];
var dayOfTheWeek = document.getElementsByClassName("day-of-the-week")[0];
var monthToday = document.getElementsByClassName("month")[0];
var info = document.getElementsByClassName("information")[0];
var descriptionText = document.getElementsByClassName("description-text")[0];
var descriptionTitle = document.getElementById("description-title");
var info = document.getElementsByClassName("information")[0];

var dateToday = new Date();

setInterval(function(){
    var newDateToday = new Date();
    if (dateToday != newDateToday){
        dateToday = newDateToday;
    }
    console.log("updater");
}, 30000);
var months = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = months[dateToday.getMonth()];
month += ".jpg";
console.log(month);
document.body.style.backgroundImage = 'url('+ month + ')';



const infoArray = new Array(13);
for(let i = 0; i < 13; i++){
    infoArray[i] = new Array (32);
}




console.log("start");

infoArray[1][1] = "1863 - President Lincoln signs the Emancipation Proclamation, abolishing slavery except in non-rebelling or occupied states like Delaware, Maryland, Kentucky, Tennessee, and parts of Louisiana.";
infoArray[1][2] = "1944 - Willie James Howard, a Black 15-year-old, is lynched by three white men in Suwannee County, Florida, after one of the men accuses Howard of writing a love note to his daughter.";
infoArray[1][3] = "1895 - Nineteen Hopi leaders are imprisoned on Alcatraz Island for opposing government assimilation efforts, which included confining farming to plots and forcibly enrolling Hopi children in boarding schools.";;
infoArray[1][4] = "1960 - The City of Montgomery, Alabama, announces it will remove seats, lock bathrooms, and turn off water fountains at its municipal airport rather than comply with a federal court order to desegregate.";
infoArray[1][5] = "1923 - After a white woman falsely accuses a Black man of rape, a white mob attacks the thriving Black town of Rosewood, Florida, in a multi-day massacre that destroys the town and leaves up to 80 people dead.";
infoArray[1][6] = "1959 - Richard and Mildred Loving plead guilty to violating a Virginia law against interracial marriage and receive one-year sentences in prison unless they leave the state for 25 years.";
infoArray[1][7] = "1807 - The Fair American ship delivers 88 kidnapped Africans to Charleston, South Carolina, for sale and enslavement.";
infoArray[1][8] = "1908 - The newly elected governor of Maryland vows to disenfranchise Black residents and denounces Black voting rights as a threat to white supremacy.";
infoArray[1][9] = "1961 - Mobs of white students riot, and school officials suspend Charlayne Hunter and Hamilton Holmes after they become the first Black students to integrate the University of Georgia.";
infoArray[1][10] ="1966 - Vernon Dahmer, a Black businessman and voting rights activist, dies after his home in Hattiesburg, Mississippi, is firebombed.";
infoArray[1][11] ="1896 - A mob of 20 people sets fire to the Jefferson Parish, Louisiana, home of Patrick Morris, a white man, and Charlotte Morris, a Black woman; they are killed, and their son escapes with his life.";
infoArray[1][12] ="1931 - In Maryville, Missouri, after a Black man is accused of killing a white teacher, a mob ties him atop the schoolhouse and burns it down, killing him without a trial; local Black residents later flee in terror.";
infoArray[1][13] ="1904 - A mob of 50 white men lynches General Lee, a Black man, for allegedly knocking on the door of a white woman's home in South Carolina.";
infoArray[1][14] ="1963 - In his inaugural address, Alabama Gov. George Wallace calls for 'Segregation now... segregation tomorrow... segregation forever!'";
infoArray[1][15] ="1991 - The Supreme Court in Board of Education of Oklahoma City Schools v. Dowell ends a federal desegregation order, even though it will lead to the racial resegregation of the school system.";
infoArray[1][16] ="1832 - The Alabama General Assembly enacts a law that bars Creek and Cherokee witnesses from testifying against white people in court and criminalizes Creek and Cherokee customs, including meetings of tribal leaders.";
infoArray[1][17] ="1834 - The Alabama legislature passes a law that effectively bans any free Black person from residing in the state.";
infoArray[1][18] ="1771 - North Carolina lawmakers vote to provide financial compensation to the white 'owners' of enslaved Black people who are executed by the state.";
infoArray[1][19] ="1930 - For five days, white mobs harass, beat, shoot, and destroy the property of Filipino farmworkers in Watsonville, California, following interracial dancing and economic competition.";
infoArray[1][20] ="1870 - Southern Democrats declare null and void the election of U.S. Senator Hiram Revels of Mississippi, the first African American senator, and argue that Black people are ineligible to serve in Congress.";
infoArray[1][21] ="1948 - U.S. Senator James Eastland of Mississippi, an ardent segregationist, successfully blocks the passage of a federal anti-lynching bill";
infoArray[1][22] ="1883 - The U.S. Supreme Court in U.S. v. Harris limits Congressional authority to criminalize racial terrorism, including violent acts by the Ku Klux Klan.";
infoArray[1][21] ="1957 - Ku Klux Klan members force Willie Edwards Jr., a Black man, to jump to his death from a bridge in Montgomery, Alabama.";
infoArray[1][22] ="1879 - A white mob accuses Ben Daniels, a Black man, of theft for trying to spend a $50 bill in Arkansas and lynches him along with his two sons.";
infoArray[1][21] ="1942 - A white mob in Sikeston, Missouri, abducts Cleo Wright, a Black man accused of assaulting a white woman, from jail, drags him behind a car, and sets him on fire in front of two Black churches as services let out";
infoArray[1][22] ="1970 - In Evans v. Abney, the Supreme Court upholds a Georgia court's decision to close rather than integrate Macon's Bacon, created for white people only";
infoArray[1][24] ="1967 - A Birmingham, Alabama, deputy sheriff shoots and kills Robert Lacey, a Black man, while arresting him for failing to take his dog to the vet";
infoArray[1][24] ="1963 - Years after Brown v. Board of Ed., civil rights lawyer Fred Gray files a lawsuit to desegregate public schools in Macon County, Alabama, leading to the founding of Macon Academy, an all-white private school.";
infoArray[1][25] ="1883 - In Pace v. Alabama, the Supreme Court upholds a law that criminalizes interracial sex and marriage.";
infoArray[1][26] ="1956 - Dr. Martin Luther King Jr.'s house in Montgomery, Alabama, is bombed while he speaks at a mass meeting; King later addresses the angry crowd and pleads for nonviolence.";
infoArray[1][27] ="1964 - Louis Allen, a witness to the murder of an NAACP activist by a white state legislator, is killed in Mississippi.";
infoArray[1][28] ="1963 - Years after Brown v Board of Ed, Civil rights lawyer Fred Gray Files a Lawsuit to desegregate public schools in Macon County, Alabama, Leading to the founding of Macon Academy, an all -white private schools";
infoArray[1][29] ="1883 - In pace v. Alabama, the supreme court upholds a law interracial sex and marrage";
infoArray[1][30] ="1956 - Dr Martin Luther King Jr's house in Montgomery, Alabama is bombed while he speaks at a mass meeting; king later addressed the angry crowd and plead for nonviolence";
infoArray[1][31] ="1964 - Louis Allen a witness to the murder of an NAACP activist by a white state legislator, is Killed in Mississippi";





infoArray[2][1] = "1965-Dr Martin Luther King Jr and more that 200 others are arrested and jailed after a voting right march in Selma Alabama ";
infoArray[2][2] = "1909 - Pittsburgh police arrest more than 200 Black men on charges of 'vagrancy' and sentence them the next day to forced labor at the city workhouse.";
infoArray[2][3] = "1948 - Rosa Lee Ingram and her two teenage sons are sentenced to die in Georgia for killing an armed white man who assaulted them.";
infoArray[2][4] = "1846 - Alabama launches convict leasing by leasing Wetumpka State Penitentiary and its inmates to a private businessman.";
infoArray[2][5] = "1917 - Congress passed the Immigration Act of 1917 to bar entry of Asian, Mexican, and Mediterranean people, poor people, and those with mental or physical disabilities or criminal records.";
infoArray[2][6] = "1902 - A mob of 200 white people seizes a 19-year-old Black man, Thomas Brown, from jail and lynches him on the courthouse lawn after he is accused of assault in Nicholasville, Kentucky.";
infoArray[2][7] = "1904 - A Black man named Luther Holbert and an unidentified Black woman are tortured, mutilated, and burned alive in front of 600 picnicking white spectators in Doddsville, Mississippi.";
infoArray[2][8] = "1968 - White state troopers fire into a group of Black students at South Carolina State College who were trying to desegregate a bowling alley, killing three and injuring 28.";
infoArray[2][9] = "1960 - A bomb explodes at the home of Carlotta Walls, the youngest of nine Black students who integrated Central High School in Little Rock, Arkansas, three years earlier.";
infoArray[2][10] ="1908 - In Brookhaven, Mississippi, a mob of 2,000 white people lynches Eli Pigot.";
infoArray[2][11] ="1826 - Alfred Moore, a white man in Hartford, North Carolina, offers a $20 reward to any white person who captures 'Joe,' an enslaved Black man who 'ran away' to visit his wife.";
infoArray[2][12] ="1946 - Police severely beat Black veteran Sgt. Isaac Woodard, permanently blinding him, for protesting mistreatment by a white bus driver while traveling in uniform on a bus trip from Georgia to North Carolina.";
infoArray[2][13] ="1960 - Nashville students launch sit-in demonstrations to demand an end to racial segregation at lunch counters and face violence and jail time.";
infoArray[2][14] ="1945 - An all white grand jury refuses to indict any of the six white man accused of raping Mrs. Recy Taylor in Abbeville, alabama they are never prosecuted"; 
infoArray[2][15] ="1804 - New Jersey passes a gradual emancipation act, delaying the end of slavery in the state for decades"; 
infoArray[2][16] ="1847 - Missouri outlaws the education of black people and bans the immigration of free Black people into the state"; 
infoArray[2][17] ="1947 - In Greenville South Carolina a white mob lynches Willie Earle, slashing chunks of flesh from his body before blasting him with a shotgun; 31 men charged with the murder are later acquitted";
infoArray[2][18] ="1965 - Jimmie Lee Jackson, a 26-year old Black man, is shot by a white police officer after police attack a peaceful civil rights protest in Marion, Alabama, and dies eight days later";
infoArray[2][19] ="1923 - In U.S v. Thind the supreme court upholds a government ruling that an indian sikh man born in Punjab is ineligible for U.S Citizenship because he is not a 'free white man' ";
infoArray[2][20] ="1956 - Civil Rights activist are arrested for organizing a bus boycott to protest mistreatment and segregation in Montgomery, Alabama; 89 are indicted the following day";
infoArray[2][21] ="1965 - Malcolm X is assassinated in front of his wife and young daughter while giving a speech at Audobon Ballroom in Harlem, New York"; 
infoArray[2][22] ="1896 - After Frazier Baker is appointed postmaker of Lake City South Carolina enraged local white people burn his home, fatally shot him and his infant daughter and wound his wife and other children"; 
infoArray[2][23] ="2020 - Ahmaud Arbery. a 25-year-old Black man is shot and killed in Glynn County. Georgia, by a white man who is not arrested until the failure to bring charges sparks nationwide protests";
infoArray[2][24] ="1865 - Kentucky refuses to ratify the Thirteenth Abolishment slavery and does not do violent movement so until 1976";
infoArray[2][25] ="1886 - An anti-Chinese convention in Boise, Idaho, starts an often- violent movement against Chinese immigrants; Chinese share of Idaho's population decreases from a third in 1870 to nearly zero by 1910";
infoArray[2][26] ="2012 - Trayvon Martin, a 17-year-old Black boy, is killed in Sanford, Florida; police arrest shooter George Zimmerman only after national outcry against claim that Stand Your Ground law barred his prosecution";
infoArray[2][27] ="1869 - Congress refuses to seat John Willis Menard of Louisiana, the first Black man elected to the House of Representatives";
infoArray[2][28] ="1942 - A mob of more than 1,000 white people riots outside a public housing project in Detroit to prevent Black families from moving in ";




infoArray[3][1] = "1921 - Idaho broadens its law banning marriage between Black and white people even though the state's population is less than .02% African American";
infoArray[3][2] = "1948 - In Johnson County, Georgia, white residents use violent intimidation to stop Black residents from voting";

infoArray[3][3] = "1819 - Congress creates a federal program to ‘civilize’ Native Americans";

infoArray[3][4] = "1921 - While walking down a Georgia road, a Black man named William Anderson is shot and killed by a mob of white people who later admit they mistook him for someone else";

infoArray[3][5] = "1959 - Twenty-one Black boys burn to death locked inside a segregated and neglected Arkansas ‘reform’ school";

infoArray[3][6] = "1857 - The Supreme Court in Dred Scott v.Sandford rules that people of African descent cannot be U.S. citizens, are not protected by the Constitution, and have no standing to sue in federal courts";

infoArray[3][7] = "1965 - Police use tear gas, whips, and clubs to attack supporters of Black voting rights marching from Selma to Montgomery, Alabama; dozens are hospitalized on what is later called “Bloody Sunday";

infoArray[3][8] = "1655 - A Virginia colonial court rules against John Casor, a Black indentured servant who sued for his freedom after being forced to work past his term, and declares him enslaved for life";

infoArray[3][9] = "1892 - Ida B. Wells's friends, Thomas Moss, Calvin McDowell, and Henry Stewart, are lynched in Memphis, sparking her lifelong crusade against lynching";

infoArray[3][10] ="1865 - During the Civil War, Confederate forces in South Carolina hang a young enslaved Black woman named Amy Spain for aiding the Union Army";

infoArray[3][11] ="1965 - The Rev. James Reeb, a white supporter of Black voting rights, dies two days after he is beaten by angry white people in Selma, Alabama";

infoArray[3][12] ="1956 - Congressmen from 11 Southern states issued the Southern Manifesto declaring opposition to the Supreme Court's Brown v. Board of Ed decision prohibiting racial segregation in public schools.";

infoArray[3][13] ="2020 - Louisville, Kentucky, police fatally shoot Breonna Taylor, an emergency room technician, in her home while executing a no-knock warrant";

infoArray[3][14] ="1835 - Missouri requires free Black people to apply for a license in order to continue residing in the state";

infoArray[3][15] ="1901 - Ballie Crutchfield, a Black woman, is lynched in Tennessee by a white mob that was looking for her brother";

infoArray[3][16] ="2021 - A white man targets three Atlanta-area spas in a mass shooting that kills eight people, including six Asian women";

infoArray[3][17] ="1851 - Samuel Cartwright, a Southern physician, claims a disease he called 'drapetomania' makes Black people want to run from slavery and prescribes whipping and amputation as a treatment";

infoArray[3][18] ="1831 - The Supreme Court declares in Cherokee Nation v. State of Georgia that tribes are 'domestic dependent nations' whose relationship to the U.S. 'resembles that of a ward to his guardian'";

infoArray[3][19] ="1939 - Lloyd Gaines, a Black man, disappears months after the U.S. Supreme Court orders him admitted to the University of Missouri School of Law; his family suspects he was murdered";

infoArray[3][20] ="1924 - Virginia Eugenical Sterilization Act is signed into law and later becomes the model sterilization law for other states and for Nazi Germany";

infoArray[3][21] ="1981 - After a Mobile, Alabama, jury acquits a Black man of killing a white police officer, Ku Klux Klan members randomly kidnap and kill 19-year-old Michael Donald, a Black man, and hang his body from a tree";

infoArray[3][22] ="1901 - Police in Atlanta, Georgia, arrest a white woman and Black man for allegedly walking and talking together on the street";

infoArray[3][23] ="1875 - Tennessee passes laws authorizing racial discrimination in hotels, public transportation, and ‘places of amusement’";

infoArray[3][24] ="1942 - The U.S. Army begins enforcement of an internment order requiring over 200 Japanese Americans to leave their homes in Washington for internment camps within six days or face arrest";

infoArray[3][25] ="1931 - Nine Black teens accused of raping two white women in Scottsboro, Alabama, are almost lynched; the ‘Scottsboro Boys’ gain national attention after their racially biased trial results in death sentences Southern Manifesto declaring opposition to the Supreme Court's Brown v. Board of Ed. decision prohibiting racial segregation in public schools";

infoArray[3][26] ="1944 - The Rev. Isaac Simmons, a Black man, is lynched in Amite County, Mississippi, by six white men who want his family's land; his family flees the area under threats of violence";

infoArray[3][27] ="1908 - After shooting a Black man for ‘swearing’ on a Washington streetcar, U.S. Rep. James Thomas Heflin of Alabama receives broad support and faces no charges";

infoArray[3][28] ="1958 - Jeremiah Reeves is executed in Alabama for raping a white woman despite evidence that police tortured him into making a false confession";

infoArray[3][29] ="1964 - Black and white worshippers are arrested for attending Easter services together at segregated churches in Jackson, Mississippi";

infoArray[3][30] ="1908 - Over 40 years after Emancipation, Green Cottenham is convicted of vagrancy and re-enslaved through Alabama's convict leasing system";

infoArray[3][31] ="1914 - A white mob lynches Marie Scott, a 17-year-old Black girl, in Wagoner County, Oklahoma";






infoArray[4][1] = "1807 - Ohio enacts a law banning Black witnesses from testifying in court against white people";

infoArray[4][2] = "2019 - Greater Union Baptist Church burns down in Opelousas Louisiana; It is the third Black church destroyed by fire in St. Landry Parish within 10 days";

infoArray[4][3] = "1911 - President William Howard Taft expels and all Black cavalry unit from San Antonio for protesting racial segregation";

infoArray[4][4] = "1968 - Dr. Martin Luther King Jr. is assassinated on the balcony of the Lorraine Motel in Memphis";

infoArray[4][5] = "1880 - Johnson Whittaker, one of the West Points first Black cadets, is brutally beaten by his wife classmate; he is later accused of faking the attack and expelled";

infoArray[4][6] = "1892 - A mob of 80 white men seizes Issac Brandon from a Virginia jail and lynches him on the courthouse lawn while his young son pleads for his life";

infoArray[4][7] = "1927 - The Ku Klux Klan kicks off a 10-day series of revival events at a white Presbyterian church in Evergreen Alabama, and recruits 600 new members";

infoArray[4][8] = "1911 - Banner Mine near Birmingham, Alabama, explodes, killing 128 people nearly all of whom where Black men leased to the Pratt Consolidated Coal Company as convict laborers";

infoArray[4][9] = "1939 - Banned from indoor venues due to her race, Black opera singer Marian Anderson performs for 75,000 people on the steps of the Lincoln Memorial";

infoArray[4][10] ="1956 - Four white men attack Black singer Nat King Cole while he is performing for an all-white audience in Birmingham, Alabama";

infoArray[4][11] ="1913 - President Woodrow Wilson's cabinet implements a government-wide segregation policy in workplaces, restrooms and lunchrooms";

infoArray[4][12] ="1963 - Commissioner of Public Saftey Eugene 'Bull' Connor orders the violent arrests of Dr. Martin Luther King Jr. and dozens of civil rights activists in Birmingham, Alabama";

infoArray[4][13] ="1873 - An armed white mob kills 150 Black people following a contested election in Colfax, Louisiana";

infoArray[4][14] ="1906 - On the town square in Springfield Missouri, a white lynch mob hangs and shoots to death Fred Coker and Horace Duncan two Black Men, before thousands of spectators";

infoArray[4][15] ="1903 - Several thousand white people in Joplin Missouri, Lynch a Black man named Thomas Gilyard and attack Black neighborhoods, burning homes shooting Black people and forcing every Black resident to flee the city";

infoArray[4][16] ="1945 - At a tryouts for Black ballplayers in the Negro Leagues, Boston Red Sox Managers taunt and abuse Black players including Jackie Robinson and send them home without a contract";

infoArray[4][17] ="1915 - A white Georgia mob lynches Caesar Sheffield, a Black man after he is accusedd of stealing meat. ";

infoArray[4][18] ="1849 - New Jersy enacts a law to bind enslaved Black people to indefinite servitude as 'apprentices for life' who cannot leave the state or5 their jobs without written permission from their 'masters or mistresses";

infoArray[4][19] ="1989 - Five Black and Latino teenagers are arrested for raping a jogger in New York City's Central Park and are incarcerated for years before being exonerated ";

infoArray[4][20] ="1965 - Georgia business owner Lester Maddox threatens three Black students at gunpoint for trying to eat in his segregated restaurant; he is acquitted of all charges and later elected governor";

infoArray[4][21] ="2007 - White parents in Turner Country Georgia, protest a high school's decision to hold its first racially integrated prom previously, parents had organized private racially segregated proms for students";

infoArray[4][22] ="1987 - The Supreme Court upholds the death penalty in McCleskey v. Kemp despite proof that it is racially biased reasoning that racial discrimination in the criminal justice system is 'inevitable'";

infoArray[4][23] ="1963 - During a one-man civil rights march to Jackson, Mississippi Williams L. Moore is found dead on U.S Highway 11 near Attalla, Alabama";

infoArray[4][24] ="1877 - Federal troops withdraw from Louisiana, marking the end of Reconstruction";

infoArray[4][25] ="1959 - A white mob beats, shoots and throws the chained body of Mack Charles Parker, a Black man, into the Pearl River after he is accused of raping a white woman in Poplarville, Mississippi";

infoArray[4][26] ="1960 - Black Protestors holding a nonviolent 'wade-in' at the segregated Biloxi Beach in Mississippi were attacked by white people with sticks, clubs, pipes and whips ";

infoArray[4][27] ="1899 - Michell Daniel is lynched in Georgia for 'talking too much about the recent lynching of another Black man";

infoArray[4][28] ="2021 - After increasing resistance to discussions about America's racial history, Idaho becomes the first state to ban the teaching of Critical Race Theory in public schools";

infoArray[4][29] ="1922 - An all-white jury acquits the officers who violently beat Rodney King, a young Black man in Los Angeles sparking an uprising in which more than 50 people die and over 2,000 are injured";









infoArray[5][1] = "1863 - During the Civil War, the Confederate Congress declares Black Union soldiers criminals and authorizes their enslavement or execution";
infoArray[5][2] = "1963 - More than 700 Black children protesting racial segregation in Birmingham, Alabama are arrested, Alabama are arrested, blasted, by fire hoses, cubbled by police, and attacked by police dogs"
infoArray[5][3] = "1913 - California enacts the Alien Land Law, which bars Asian immigrants from owning land.";
infoArray[5][4] = "1921 - Chicago real estate board unanimously votes to expel members who sell homes in white neighborhoods to Black buyers.";
infoArray[5][5] = "1943 - A new law requiring that all marriage licenses indicate  the race of the parties to be married take effect in California to help enforce the state's existing ban on interracial marriages";
infoArray[5][6] = "1882 - President Chester Arthur signs then Chinese Exclusion Act, Banning immigration from China for 10 years and prohibiting Chinese immigrants from becoming U.S citizens.";
infoArray[5][7] = "1955- In Belzoni, Mississippi, The Rev. George Lee, a member of the NAACP, is fatally shot after he angered local white people by trying to register to vote";
infoArray[5][8] = "2009 - Members of the Ku Klux Klan burn a cross to intimidate residents of a Black neighborhood in Ozark, Alabama";
infoArray[5][9] = "1961- Future Georgia congressman John Lewis and two other Freedom Riders are assaulted for trying to enter the white waiting room at the Greyhound bus station in Rock Hill, South Carolina";
infoArray[5][10] ="1740- South Carolina enacts the Negro Act of 1740, which allows enslavers to whip and kill enslaved people who violate the law by growing their own food,learning to read, assembling in groups, or earning money";
infoArray[5][11] = "2010 - Arizona's governor signs HB 2281, a law designed two end Ethnic Studies classes in the state.";
infoArray[5][12] = "1898- Louisiana adopts a state constitution designed to 'purify the electorate' by using poll taxes, literacy tests, and land-owning requirements to block Black people from voting.";
infoArray[5][13] = "1956- Four white men rape Annette Butler a Black 16-year old,in Tylertown, Mississippi and are later acquitted by all-white , all-male juries,despite a confession.";
infoArray[5][14] = "1961 - A white mob sets fire to a bus carrying Freedom Riders, an interracial group challenging segregated transportation and attacks riders with clubs, bricks, iron pipes and knives, near Annist";
infoArray[5][15] = "1916 - A mob of 15,000 burns alive African American teenager Jesse Washington in Waco, Texas. <br> <p> 1970 - Police shoot and kill two unarmed Black student protestors at Jackson State College."
infoArray[5][16] = "1956 -  White Residents in Delray beach, Florida burn a cross in stockpile weapons to maintain racial segregation of a public beach.";
infoArray[5][17] = "1954- In Brown v Board of Education of Topeka the U.S Supreme Court rules that racial segregation in public schools Violates the Constitution sparking massive white resistance and violence.";
infoArray[5][18] = "1896- The Supreme Court in Plessy v. Ferguson announces doctrine of 'separate but equal' and upholds state-mandated racial segregation as longs as accommodations are equal.";
infoArray[5][19] = "1918- Mary Turner a pregnant Black woman, is lynched in Georgia for publicly lynnching of her husband.";
infoArray[5][20] = "1961- Police in Montgomery, Alabama allow a white mob to attack Freedom Riders and several people including an envoy from the Justice Department are severely injured.";
infoArray[5][21] = "1961- National Guard troops are ordered to disperse several thousand white people threatening to set fire to First Baptist Church in Montgomery Alab with Martin Luther King Jr,and Freedom Riders";
infoArray[5][22] = "1872- Congress passes the Amnesty Act, which restores to most Confederates the rights to vote and hold office. ";
infoArray[5][23] = "1796 - President George $10 reward for capture of an enslaved Black woman.";
infoArray[5][24] = "1911 - A White mob abducts and lynches Laura Nelson and her young son, L.D., hanging the Black woman and boy from a bridge in Okfuskee County, Oklahoma. ";
infoArray[5][25] = "2020 - A white Minneapolis police officer kills George Floyd, an unarmed Black man, by pinning his neck to the ground and choking him sparking global protests against police brutality.";
infoArray[5][26] = "1924- In response to eugenicists fears that some immigrants would pollute the American gene pool, Congress passes the Immigration Act of 1924, which bars all immigration from Asia";
infoArray[5][27] = "1892 - A white mob angered by Ida B. Wells's anti-lynching editorials in The Free Speech and Headlight destroys her Memphis newspaper office; she relocates to Chicago.";
infoArray[5][28] = "1830 -President Andrew Jackson signs Act, which requires tribes to exchange land east of the Mississippi River for territory in the West and leads to the forcible removal of those who resist.";
infoArray[5][29] = "1930- Black families of fallen World War 1 veterans are forced to travel separately from white mourners on a State Department trip to visit their loved ones graves.";
infoArray[5][30] = "1943- A series of violent conflicts between white sailors and Latino youth in California during World War 2 called the Zoot Suit Riots Breaks out in Los Angeles.";
infoArray[5][31] = ">1930- A thousand white men and boys lynch 19-year-old Henry Argo in Grady County, Oklahoma.";


infoArray[6][1] = "1921- White people attack a prosperous Black community in Tulsa, Oklahoma, and burn it to the ground during two days of rioting that leaves up to 300 people dead";

infoArray[6][2] = "1961- A Virginia judge dismisses a lawsuit challenging segregated courtroom seating and defends the policy as a way to preserve order and decorum";

infoArray[6][3] = "1893-A mob of 1,500 white people lynches Sam Bush on the courthouse lawn in Decatur, Illinois;members of the crow take pieces of the rope as souvenirs";

infoArray[6][4] = "1963-After white patrons protest, three movie theaters in Savannah, Georgia, cancel integration plans and restore anti-Black discrimination";

infoArray[6][5] = "1910- White mobs angered by the recent acquittal of a Black man terrorize Black residents in Orange County, Texas, fatally shooting Douglas Lemon and Rankin Moore";

infoArray[6][6] = "1966-Civil rights activist James Meredith is ambushed and shot several times during his one-man walk Against Fear' through Mississippi; he survives the shooting";

infoArray[6][7] = "1920- William Simmons, head of the Ku Klux Klan, hires publicists to grow the group's membership; nearly 100,000 people join the terror group in the next 16 months";

infoArray[6][8] = "2016 -A grand jury in Arlington, Texas, refuses to indict Brad Miller, a white police officer who fatally shot Christian Taylor, an unarmed,";

infoArray[6][9] = "1963 -Civil rights leader Fannie Lou Hamer and other civil rights activists are arrested on false charges in Winona, Mississippi, and severely beaten while in jail";

infoArray[6][10] = "1954- Southern governors meeting in Richmond, Virginia, vow to defy the U.S. Supreme Court's Brown v. Board of Education decision outlawing racial segregation in public schools";

infoArray[6][11] = "1967- A white police officer fatally shoots unarmed Black teenager Martin Chambers in the back, setting off three days of riots in Tampa, Florida";

infoArray[6][12] = "1945- Niecey Brown, a 74-year-old Black woman, dies after George Booker, an off-duty white police officer, forcibly enters her house in Selma, Alabama, and beats her";

infoArray[6][13] = "1904- A Kentucky judge orders a Black woman to publicly whip her teenaged son in front of hundreds of white spectators to punish him for fighting with a white boy";

infoArray[6][14] = "1910 -Louisiana broadens its ban on interracial relationships by barring Black and white people from living together under any circumstances";

infoArray[6][15] = "1920- Three Black circus workers, Isaac McGhie, Elmer Jackson, and Elias Clayton, are accused of raping a white woman and lynched by a mob of 10,000 in Duluth, Minnesota";

infoArray[6][16] = "1944- South Carolina electrocutes George Stinney Jr., a 90- pound Black 14-year-old, after he is falsely accused of rape and murder; he is the youngest person executed in the U.S. in the 20th century ";

infoArray[6][17] = "2015- A white teenager seeking to start a 'race war' fatally shoots nine Black people attending Bible study at Eman A.M.E. Church in Charleston, South Carolina";

infoArray[6][18] = "1971- After President Richard Nixon's speech to Congress, media declares the start of America's 'War on Drugs' policies that help grow the U.S. prison population from 200,000 to more than two million in 30 years";

infoArray[6][19] = "1865- Months after the Emancipation Proclamation is signed, enslaved Black people in Texas finally learn about it when Union troops arrive and tell them the Confederacy lost the Civil War";

infoArray[6][20] = "1940- After NAACP members try to register to vote in Brownsville, Tennessee, a mob of white men retaliates by lynching local NAACP secretary Elbert Williams";

infoArray[6][21] = "1940 -Jesse Thornton, a Black man, is lynched in Luverne, Alabama, for referring to a white police officer by his name, without using Mr.";

infoArray[6][22] = "1908- After a white farmer is killed in Sabine County, Texas, white mobs terrorize the Black community, lynching nine Black men within a 24-hour period";

infoArray[6][23] = "1855 -Celia, a 19-year-old enslaved Black woman whose white 'owner' repeatedly raped her, kills him during an attempted rape and is later convicted and hanged";

infoArray[6][24] = "1964- White reside wage several days ( violence to protest racial integration of beach in St. Augus Florida";

infoArray[6][25] = "2013- In Shelby Co. v. Holder, the Supreme Court invalidates key provisions of the Voting Rights Act, removing protections that had shielded voters from racial discrimination since 1965";

infoArray[6][26] = "1844- After slavery is declared illegal in Oregon, officials pass laws that prohibit Black people from residing in the state and authorize the whipping of Black people found there";

infoArray[6][27] = "1911- A mob of several hundred white men lynches two Black men, Tom Allen and Joe Watts, in Walton County, Georgia, after a local white judge refuses to protect them";

infoArray[6][28] = "1865- The Freedman's Savings and Trust Company fails, financially devastating more than 60,000 Black Americans and organizations who collectively lost $3million";

infoArray[6][29] = "1958 -Bethel Street Baptist Church in Birmingham, Alabama, pastored by the Rev. Fred Shuttlesworth, a leading civil rights activist, is bombed";

infoArray[6][30] = "1829 -Officials in Cincinnati use local laws to force Black residents to leave the city";



infoArray[7][1] = "1965- A sheriff padlocks a Black church in Wilcox County, Alabama, after a local civil rights group uses the church as a meeting place"; 
infoArray[7][2] = "1822- Denmark Vesey, a Black carpenter accused of planning a revolt against enslavers in Charleston, South Carolina, is executed; 34 others are later executed for an attempted insurrection that never happened";
infoArray[7][3] = "1917- Four days of attacks on African Americans in East St. Louis, Illinois, leave up to 200 dead and cause 6.000 Black residents to flee the city";
infoArray[7][4] = "1933- A white mob seizes Norris Dendy from a jail in Clinton, South Carolina, beats him, hangs him, and then dumps his body in the yard of a nearby church";
infoArray[7][5] = "2016- Police in Baton Rouge, Louisiana, shoot and kill Alton Sterling, a 37-year-old Black man, while he is pinned to the ground; video of the shooting leads to major protests nationwide";
infoArray[7][6] = "2016- Police shoot and kill a Black man named Philando Castile during a traffic stop in St. Paul, Minnesota, while his girlfriend and her daughter watch in fear";
infoArray[7][7] = "1893-Despite evidence that he is innocent, a Black man named Seay Miller is tortured, mutilated, and lynched by 5,000 white people in Bardwell, Kentucky";
infoArray[7][8] = "1860 -Half a century after Congress banned the importation of enslaved people, the Clotilda lands in Mobile, Alabama, as the last recorded ship carrying enslaved people to U.S";
infoArray[7][9] = "1954 -Weeks after Brown v. Board of Education struck down segregated public schools, Alabama's Board of Education unanimously votes to maintain racial segregation in the state's public schools";
infoArray[7][10] = "1969 -Georgia Gov. Lester Maddox says he would rather close all public schools in the state than comply with demands from the Justice Department to desegregate schools";
infoArray[7][11] ="1954 -White residents form a White Citizens' Council to organize and carry out massive resistance to racial integration of public schools in Indianola, Mississippi";
infoArray[7][12] = "1898- A white mob in Virginia lynches Jon Henery James, ignoring the Black man's protest of innocence and taking pieces of his clothing and his corpse as souvenirs";
infoArray[7][13] = "1929- After a Black man is accused of killing a white police officer in North Platte, Nebraska, white residents force the town's 200 Black residents to leave their homes";
infoArray[7][14] = "1959 -Black models are cut from a fashion show for the American National Exhibition in Moscow after U.S. fashion editors object to racially-integrated scenes";
infoArray[7][15] = "1954- U.S. Border Patrol begins 'Operation Wetback,' in which agents deport more than one million people to Mexico and stop 'Mexican-looking' people on the street to demand identification";
infoArray[7][16] = "1944- Irene Morgan, a Black woman, is arrested in Virginia for refusing to give up her seat to a white passenger on an interstate Greyhound bus";
infoArray[7][17] = "2014- Police in Staten Island, New York, put a Black man named Eric Garner in a chokehold until he dies; a video of the killing is taken by a bystander and leads to nationwide protests";
infoArray[7][18] = "1946- White men shoot World War II veteran Maceo Snipes in the back at his home the day after he became the first Black person to cast a vote in Taylor Country, Georgia";
infoArray[7][19] = "1919- After a Black man accused of trying to rape a white woman is released, white mobs in Washington attack Black people, killing 40 and injuring 150 people over four days";
infoArray[7][20] = "2015- North Carolina lawmakers pass a bill requiring legislative approval to remove historical monuments after discussing how to protect Confederate monuments; the bill is signed days later";
infoArray[7][21] = "1913-Thirty-five Black men burn to death while trapped inside a locked dormitory at Oakley Farm prison camp in Hinds County, Mississippi";
infoArray[7][22] = "1899- Moments before his trial is to begin, a white mob whips Frank Embree, a Black man, over 100 times and hangs him in front of more than 1,000 onlookers in Fayette Missouri";
infoArray[7][23] = "1942- Declaring segregation a 'basic necessity,' Alabama's governor refuses a federal contract with a nondiscrimination clause";
infoArray[7][24] = "1972- Washington Star exposes the Tuskegee Syphilis Experiment, a study conducted on Black sharecroppers in Alabama by the CDC";
infoArray[7][25] = "1946- A mob of 30 armed and unmasked men lynches two Black couples, George and Mae Dorsey and Roger and Dorothy Malcom, near Moore's Ford Bridge in Walton County, Georgia";
infoArray[7][26] = "1949 -Hundreds of white men hunt and lynch Ernest Thomas, who along with 16-year-old Charles Greenlee and two other Black men, was falsely accused of rape in Groveland, Flordia";
infoArray[7][27] = "1967 -A multi-day uprising in Detroit ends, leaving more than 40 people dead, most of whom were Black and killed by police";
infoArray[7][28] = "1916 -Police in Louisville, Kentucky, arrest at least three people as part of an ongoing plan to aggressively enforce legal bans on interracial relations";
infoArray[7][29] ="1880 -Nancy Williams, a Black woman, places an ad for information about her daughters 20 years after she was sold away from them, like thousands of Black people who tried to find their lost relatives after Emancipation"
infoArray[7][30] =""
infoArray[7][31] =""




infoArray[8][1] = "1944 - In Philadelphia, 6,000 white transit employees strike after eight Black men begin training as motormen on street cars, a job that had been reserved for white men only";

infoArray[8][2] = "1900 - North Carolina voters overwhelmingly pass an amendment to disenfranchise African Americans as part of a statewide campaign to intimidate Black voters";

infoArray[8][3] = "2019 - A suspected white nationalist kills 23 people and wounds 23 more in a mass shooting in El Paso, Texas";

infoArray[8][4] = "1964 - The bodies of murdered civil rights workers Michael Schwerner, James Chaney, and Andrew Goodman are found in a Mississippi dam two months after their disappearance";

infoArray[8][5] = "2012 - A white supremacist opens fire on a Sikh temple in Wisconsin, killing six people and injuring several more before taking his own life";

infoArray[8][6] = "1942 - Southern Railway Company adopts a policy denying dining service to Black passengers";

infoArray[8][7] = "1930 - Thomas Shipp and Abram Smith are lynched in Marion, Indiana; 16-year-old James Cameron survives the attack and later founds America's Black Holocaust Museum in Milwaukee";

infoArray[8][8] = "2016 - Fourteen-year-old Ahmed Mohamed sues the Irving, Texas, school district after he was arrested and suspended for bringing to school a homemade clock that officials claimed was a bomb";

infoArray[8][9] = "2014 - Eight days after graduating from high school, Black teenager Michael Brown is shot and killed by a white police officer in Ferguson, Missouri, sparking protests and outcry nationwide";

infoArray[8][10] ="1898 - After repeated threats and lynching attempts, officers allow a white mob to seize three Black men and a Black woman from jail and hang them without a trial in Clarendon, Arkansas";

infoArray[8][11] = "2017- A group of white nationalists protests plans to remove a Confederate statue in Charlottesville, Virginia; the next day, a protestor drives a car into counter-protestors, injuring 19 and killing one woman";

infoArray[8][12] = "1903 -After failing to lynch a Black man, white mobs in Whitesboro, Texas, violently terrorize local Black residents and force them to flee";

infoArray[8][13] = "1955- Black veteran Lamar Smith is shot and killed in front of the Brookhaven, Mississippi, courthouse for urging Black residents to vote; no one is arrested despite numerous witnesses";

infoArray[8][14] = "1908 - After a failed lynching attempt, a mob of 5,000 white people in Springfield, Illinois, storms Black neighborhoods, burns Black businesses and homes, and kills Black residents";

infoArray[8][15] = "1876 - Congress cuts off funds and food promised to Lakota Sioux to coerce them to cede the Black Hills to the U.S. or starve to death, leading to the seizure of the Black Hills in February 1877";

infoArray[8][16] = "1904 - A mob of unmasked white men in Marengo County, Alabama, lynches Rufus Lesseur, a 24-year-old Black man, and leaves his body riddled with bullets";

infoArray[8][17] = "1923 - An estimated 1.000 white men and women participate in a Ku Klux Klan initiation ceremony outside of Warwick, New York";

infoArray[8][18] = "1889 - A white mob lynches a Black man named Walter Asbury in Chatham County, Georgia, and leaves his body hanging for a full day to terrorize the local Black community";

infoArray[8][19] = "1916 - A mob of 200 white farmers hangs a 21-year-old Black man named Edward Lang in Navarro County, Texas";

infoArray[8][20] = "1619 - A Dutch ship lands in Jamestown, Virginia, carrying the first kidnapped Africans trafficked to colonial Virginia, where they were sold into slavery";

infoArray[8][21] = "1959 - Arkansas Supreme Court Justice Jim Johnson urges thousands at a pro-segregation rally to 'do what needs to be done to stop the integration of public schools";

infoArray[8][22] = "1905 - White people riot in Pittsburgh after Charles Miller, a Black man, enters a public restaurant";

infoArray[8][23] = "1989 - A white mob in Bensonhurst, New York, murders Yusef Hawkins, a Black teenager, after accusing him of visiting a white girl";

infoArray[8][24] = "1923 - White men in Jacksonville, Florida, lynch Black farmhand Ben Hart for allegedly peeping into a white woman's room; he is later exonerated";

infoArray[8][25] = "1956 - Sticks of dynamite explode at the home of Robert Graetz, a young white minister at Trinity Lutheran Church in Montgomery, Alabama, who actively supported the Montgomery Bus Boycott";

infoArray[8][26] = "1874 - A mob of 400 masked men on horseback and armed with shotguns kidnaps 16 Black men from jail in Gibson County, Tennessee, and lynches them";

infoArray[8][27] = "1960 - Segregationists wielding bats and axe handles attack civil rights activists staging a lunch counter sit-in in Jacksonville, Florida";

infoArray[8][28] = "1955 - Roy Bryant and J.W. Milam, white members of the Ku Klux Klan, abduct 14-year-old Emmett Till from his great-uncle's cabin in Mississippi and murder him";

infoArray[8][29] ="1961 - Bob Moses is beaten while helping to register voters; he becomes the first Black person to file charges against a white person for violence in Amite County, Mississippi, but his attacker is later acquitted";

infoArray[8][30] ="1956 - On the first day of school, mobs of white segregationists guard Mansfield High School in Texas and use weapons to prevent Black children from registering for school";

infoArray[8][31] ="1966 - The Alabama Senate passes a law to prevent school integration by making it illegal for public schools to enter into desegregation plans with federal officials"



infoArray[9][1] = "1884 - Superintendent denies Mamie Tape, a Chinese American child, admission to public school in San Francisco, saying Chinese Americans are 'dangerous to the wellbeing of the state'";

infoArray[9][2] = "1885 - White miners upset about competition for jobs kill 28 Chinese workers in Rock Springs, Wyoming, causing hundreds to flee and sparking anti-Chinese violence across the West";

infoArray[9][3] = "1901 - Alabama adopts a racist constitution that seeks to legalize white supremacy, prohibits interracial marriage, and mandates separate schools for Black and white children";

infoArray[9][4] = "1875 - White mobs attack and murder dozens of Black citizens in Clinton, Mississippi, in a riot that lasts several days and becomes known as the Clinton Massacre";

infoArray[9][5] = "1912 - Robert Johnson, a Black man, is lynched in Princeton, West Virginia, in front of a crowd of 5,000 people";

infoArray[9][6] = "1913 - Eight Black men die of asphyxiation after authorities at a prison farm in Richmond, Texas, confine 12 Black men in an underground cell as punishment for not picking cotton fast enough";

infoArray[9][7] = "1963 - Local merchants in Plaquemines Parish, Louisiana, start enforcing an ordinance that denies service to all members of the U.S. military, regardless of their race, to protest integration of the armed services";

infoArray[9][8] = "2010 - Officials at Kilby Correctional Facility in Montgomery, Alabama, prohibit an EJI client from receiving Slavery by Another Name, a Pulitzer Prize-winning book about the history of convict leasing in Alabama";

infoArray[9][9] = "1957 - Mobs of white church members led by a local minister protest the integration of a white elementary school by 19 Black six-year-olds in Nashville; the school is bombed the next morning";

infoArray[9][10] ="1963 - White students in Tuskegee, Alabama, withdraw from school after racial integration; with the help of state funds, most enroll at the private Macon Academy, which is still over 90% white today";

infoArray[9][11] ="1895 - South Carolina convenes a state constitutional convention with the explicit purpose to disenfranchise African Americans";

infoArray[9][12] ="1966 - White mobs attack African American students who are attempting to integrate schools in Grenada, Mississippi";

infoArray[9][13] ="1907 - The Annual Conference of the Methodist Episcopal Church in Michigan votes against ordaining Black bishops";

infoArray[9][14] ="1874 - A white supremacist militia attacks New Orleans and overthrows Louisiana's elected, integrated state government in what becomes known as the Battle of Liberty Place";

infoArray[9][15] ="1963 - White segregationists bomb the 16th Street Baptist Church, a frequent meeting place for civil rights activists in Birmingham, Alabama, and kill four young Black girls attending Sunday school";

infoArray[9][16] ="1928 - Okeechobee Hurricane in South Florida kills 2,500 people, mostly Black migrant farmworkers; more than 600 Black victims are buried in segregated mass graves with no memorial";

infoArray[9][17] ="1956 - The principal of an all-white school in Clay, Kentucky, bars four Black children from entering a week after they integrated the school as hundreds of white parents and students protest";

infoArray[9][18] ="1850 - Congress passes the Fugitive Slave Act, forcing citizens to cooperate in capturing and returning enslaved people to their enslavers, even if they were living in a free state";

infoArray[9][19] ="1966 - White mobs attack African American students who are attempting to integrate schools in Grenada, Mississippi";

infoArray[9][20] ="1962 - Mississippi Gov. Ross Barnett denies Black veteran James Meredith admission to the University of Mississippi in violation of a federal court order, sparking riots by white students that leave two people dead";

infoArray[9][21] ="2011 - Georgia executes Troy Davis despite strong evidence of his innocence, including recanted witness statements, and a global campaign demanding that his sentence be commuted";

infoArray[9][22] ="1906 - After Atlanta newspapers report four alleged assaults on white women, 10,000 white men terrorize the city's Black community for four days, killing between 25 and 40 people";

infoArray[9][23] ="1955 - An all-white jury in Tallahatchie County, Mississippi, acquits Roy Bryant and John Milam in the murder of 14-year-old Emmett Till, months before they confess in a Look Magazine story";

infoArray[9][24] ="1964 - A crowd of 7,500 white people marches to protest increased racial integration in New York City public schools";

infoArray[9][25] ="1962 - A predawn fire destroys St. Matthew Baptist Church in Macon, Georgia, in the state's fourth Black church fire within a few weeks";

infoArray[9][26] ="1963 - The Alabama Supreme Court upholds contempt conviction against Mary Hamilton for not responding when a prosecutor used her first name but called white people 'Mrs.' or 'Mr.'";

infoArray[9][27] ="1958 - Little Rock, Arkansas, residents vote to close public schools rather than integrate; schools remain closed for one year";

infoArray[9][28] ="1868 - White people in Opelousas, Louisiana, attack a white man for registering Black voters, hang 20 Black people who defend him, and riot, leaving over 200 unarmed Black people and over 30 white people dead";

infoArray[9][29] ="1915 - Alabama lawmakers bar white female nurses from treating Black male patients";

infoArray[9][30] ="1919 -White people massacre hundreds of Black people in Elaine, Arkansas, after Black sharecroppers demand fair prices";


infoArray[10][1] = "1939 - Police arrest a Black woman in Sampson County, North Carolina, for shouting a warning to a Black man as he was being pursued by a lynch mob";
infoArray[10][2] = "1930 - White neighbors throw bricks, fire gunshots, and use iron bars to smash the windows of a house in Greeley, Colorado, where six Black students enrolled at a teachers college lived";
infoArray[10][3] = "1912 - White prisoners lynch a Black man named Frank Wigfall in Wyoming State Prison";
infoArray[10][4] = "1916 - A white mob in Graceton, Texas, lynches William Spencer, a 30-year-old black husband and father of four children";
infoArray[10][5] = "1920 - A mob lynches four Black men in Macclenny, Florida, seizing three from the county jail and shooting the fourth dead in the woods";
infoArray[10][6] = "2009 - A justice of the peace in Louisiana refuses to marry an interracial couple because of their race; he later admits that he denied marriage licenses to interracial couples for years";
infoArray[10][7] = "1963 - State troopers join local deputies in beating and shocking with cattle prods more than 350 African Americans as they wait in line to register to vote at the county courthouse in Selma, Alabama";
infoArray[10][8] = "1953 - The police department in Birmingham, Alabama, cancels an interracial baseball game organized by Jackie Robinson, citing a city ordinance against 'mixed athletics' ";
infoArray[10][9] = "1893 - A white mob attacks a Black couple in Weakley County, Tennessee, lynching Bob Hudson and brutally beating his wife";
infoArray[10][10] ="1871 - Activist Octavius Catto and two other Black men killed after voting in Philadelphia 1933 California cotton growers trying to break a strike kill a Mexican diplomat and two farmworkers- 1933 California cotton growers trying to break a strike kill a Mexican diplomat and two farm workers";
infoArray[10][11] ="1921 - Police in Texas shoot and kill David Bunn, a handcuffed Black man, as he flees a white lynch mob";
infoArray[10][12] ="1995 - Five police officers in suburban Pittsburgh kill Black motorist Jonny Gammage during a routine traffic stop by pinning him facedown on the pavement until he asphyxiates";
infoArray[10][13] ="1920 - White mobs terrorize Black residents in Roxboro, North Carolina, forcing them to leave town";
infoArray[10][14] ="1982 - Declaring drugs a threat to national security, President Ronald Reagan doubles down on the Nixon Administration's 'War on Drugs' and calls for new laws to impose prison sentences for drug use";
infoArray[10][15] ="1883 - The Supreme Court facilitates the expansion of Jim Crow laws in the South by striking down the Civil Rights Act of 1875, which banned racial discrimination in public places";
infoArray[10][16] ="1968 - U.S. sprinters Tommie Smith and John Carlos raise black-gloved fists on the medal stand at the Olympics in Mexico to protest racial inequality in the U.S.; they receive death threats for years after returning home";
infoArray[10][17] ="1938 - White people in Smyrna, Georgia, riot for days, stoning and beating Black people and burning a Black school, after a Black man is arrested and accused of killing a white farmer and his daughter";
infoArray[10][18] ="1933 - A mob of 2,000 in Princess Anne, Maryland, takes George Armwood from jail, beats him, hangs him, drags his body through the streets, and then hangs and burns his corpse";
infoArray[10][19] ="1960 - Dr. Martin Luther King Jr. joins a sit-in protest in a downtown Atlanta department store and is arrested with 51 others for trying to desegregate the city's stores and restaurants";
infoArray[10][20] ="1920 - White mobs terrorize Black residents in Roxboro, North Carolina, forcing them to leave town";
infoArray[10][21] ="1835 - A pro-slavery white mob assaults white abolitionist William Lloyd Garrison and drags him through the streets of Boston";
infoArray[10][22] ="1946 - An all-white jury in Holmes County, Mississippi, takes 10 minutes to acquit the white men charged in the lynching of Leon McAtee, a Black man they flogged to death for stealing a saddle";
infoArray[10][23] ="1909 - White men chase a Black man from Maryland to Washington, D.C., and attempt to lynch him hear the U.S. Capitol building";
infoArray[10][24] ="1961 - Officials close parks in Birmingham, Alabama, rather than comply with a federal order mandating racial integration";
infoArray[10][25] ="1989 - After a white man falsely claims to be the victim of a Black male assailant, Boston police harass Black neighborhoods and make mass arrests";
infoArray[10][26] ="1866 - Texas passes a law providing that Black people cannot testify in court unless the defendant is Black or the crime charged was committed against a Black person";
infoArray[10][27] ="1986 - The Anti-Drug Abuse Act of 1986 creates a 100-to-1 sentencing disparity between crack and powder cocaine possession that contributes to mass incarceration of African Americans";
infoArray[10][28] ="1958 - A mob of white men in Monroe, North Carolina, threatens to lynch nine-year-old James Thompson after a white girl kissed him on the cheek; he and seven-year-old David Simpson are later jailed for three months";
infoArray[10][29] ="1869 - Black Georgia legislator Abram Colby is publicly assaulted and whipped for promoting equal rights";
infoArray[10][30] ="1967 - Dr. Martin Luther King Jr. and the Rev. Ralph Abernathy begin five-day jail sentences in Birmingham, Alabama, for leading civil rights protests";
infoArray[10][31] ="1901 - A white mob hangs and shoots to death Silas Esters, a Black man, in front of the courthouse in LaRue County, Kentucky";


infoArray[11][1] = "1879 -Federal government opens a school in Pennsylvania to force Indigenous children to assimilate";
infoArray[11][2] = "2004 - Alabama voters reject a constitutional amendment that would remove from the state constitution a provision requiring separate schools for 'white and colored children";
infoArray[11][3] = "1874 -White men wage election-day violence to suppress Black votes in Eufaula and Spring Hill, Alabama, killing seven and injuring dozens more";
infoArray[11][4] = "1890 - Benjamin Tillman, a white supremacist who advocated violence against Black voters and opposed education for African Americans, is elected governor of South Carolina";
infoArray[11][5] = "1901 -Ohio officials arrest several Black voters accused of going to the wrong polling place on election day";
infoArray[11][6] = "1947 -Police in Rochester, New York, shoot Roland T. Price, an unarmed Black veteran, 25 times; he dies and the shooting is later ruled 'justified' ";
infoArray[11][7] = "1931 -A Fisk University dean and student die from injuries sustained in a car accident after a segregated Georgia hospital refuses to treat them";
infoArray[11][8] = "1889 -A young Black man named Orion 'Owen' Anderson is lynched in Leesburg, Virginia, for frightening a white girl by wearing a sack on his head";
infoArray[11][9] = "1866 -Texas lawmakers authorize counties to employ jail inmates in public works and to lease them to private employers, with all profits going to county treasuries";
infoArray[11][10] ="1898 - Armed white residents take political control in Wilmington, North Carolina, by killing dozens of Black people and forcing 2,000 Black residents to flee the majority-Black city at gunpoint";
infoArray[11][11] ="1831 - Nat Turner, the Black leader of an anti-slavery revolt, is hanged in Jerusalem, Virginia";
infoArray[11][12] ="1935 - A mob of 700 white people lynches two Black children, 15-year-old Ernest Collins and 16-year-old Benny Mitchell, in Colorado County, Texas; officials later call the murders justice ";
infoArray[11][13] ="1957 - Police in Longview, Texas, order four local NAACP officers to name their members or face jail; the men refuse and are arrested less than 24 hours later";
infoArray[11][14] ="1960 - White mobs hurl slurs and threats at six-year-old Ruby Bridges as she integrates William Frantz Elementary School in New Orleans";
infoArray[11][15] ="1830 - North Carolina makes it illegal to distribute anti-slavery materials and mandates the death penalty for anyone who does so more than once";
infoArray[11][16] ="1900 - Hundreds of white people in Limon, Colorado, lynch Preston John Porter Jr., a Black 15-year-old, by burning him alive";
infoArray[11][17] ="1937 - More than 1,000 white students and faculty at the University of North Carolina at Chapel Hill attend a campus event to hear the Imperial Wizard of the Ku Klux Klan promote white supremacy";
infoArray[11][18] ="1983 - Chicago police beat, electrocute, and threaten to castrate James Cody, one of more than 100 Black men the department systematically tortured over three decades";
infoArray[11][19] ="1906 - Local white employers uniformly refuse to hire dozens of Black soldiers seeking work after being wrongfully discharged from service near San Antonio";
infoArray[11][20] ="1955 - A white church board in Durant, Mississippi, votes unanimously to fire the Rev. Marsh Callaway, a Presbyterian minister who defended racial integration and spoke out against the White Citizens' Council ";
infoArray[11][21] ="1927 - The Supreme Court in Gong Lum v. Rice allows a Chinese American's exclusion from a state school for white children because she can attend a 'colored school' with 'equal'  facilities";
infoArray[11][22] ="1865 - Mississippi requires local sheriffs to round up Black orphans and sell them to white people as laborers";
infoArray[11][23] ="2014 - Tamir Rice, a Black 12-year-old, dies after being shot by police while playing with a toy gun in a park near his home in Cleveland";
infoArray[11][24] ="1958 - The Supreme Court upholds a school placement law that maintains segregated schools in Alabama despite its Brown v. Board ruling that segregated public schools are unconstitutional";
infoArray[11][25] ="1829 - A newspaper ad seeks to help locate a 'runaway' Black man who was formerly enslaved as a servant for white students at the University of North Carolina";
infoArray[11][26] ="1957 - During a special session to pass segregation laws, Texas lawmakers vote 115-26 to pass a bill giving the governor power to immediately close any school where federal troops might be sent to enforce integration";
infoArray[11][27] ="1995 - Criminologists predict youth crime wave of 'radically impulsive, brutally remorseless' Black male 'super-predators,' leading to laws that expose thousands of children to adult prosecution ";
infoArray[11][28] ="1933 - Thousands of white people gather for the brutal lynching of Lloyd Warner, a 19-year-old Black man, in St. Joseph, Missouri";
infoArray[11][29] ="1864 - In the Sand Creek Massacre, U.S. troops attack a Cheyenne and Arapaho village in Colorado and brutally kill hundreds of people, most of whom are women and children";
infoArray[11][30] ="1921 - A sheriff in Texas turns Black 15-year-old Robert Murtore over to a white lynch mob; the child's body is later found after he was tied to a post and shot to death";


infoArray[12][1] = "1955 - Rosa Parks is arrested for refusing to give up her seat to a white passenger on a city bus in Montgomery, Alabama";
infoArray[12][2] = "1975 - A white police officer in Montgomery, Alabama, fatally shoots Bernard Whitehurst Jr., a 32-year-old Black man whom he mistook for a suspect; he and other officers plant a gun near the body to cover up the shooting";
infoArray[12][3] = "1970 - Cesar Chavez is jailed in Monterey County, California, after he refuses to follow a court order demanding that he call off a migrant farmworkers' strike against a lettuce farm";
infoArray[12][4] = "1969 - Illinois Black Panther Party leaders Fred Hampton, 21, and Mark Clark, 22, are assassinated by Chicago Police in a predawn apartment raid; four more party members are wounded";
infoArray[12][5] = "1910 - A judge in Washington, D.C., rules that eight-year-old Isabel Wall cannot attend a segregated school for white students because she is 1/16 Black";
infoArray[12][6] = "1915 - In Mackenzie v. Hare, the U.S. Supreme Court upholds a federal statute stripping women of their U.S. citizenship if they marry 'foreigners' ";
infoArray[12][7] = "1874 - After a formerly enslaved man is elected sheriff in Vicksburg, Mississippi, white people remove him and kill Black citizens who try to reinstate him; he is later shot in the head by a white deputy";
infoArray[12][8] = "1915 - A Black woman named Cordelia Stevenson is lynched near Columbus, Mississippi, after being wrongly accused of burning a white man's barn; her body is left hanging for two days";
infoArray[12][9] = "2014 - U.S. officials release report on CIA torture of Muslim detainees from 2001 to 2006, including force-feeding, mock executions, physical and sexual violence, sleep deprivation, and waterboarding";
infoArray[12][10] ="1960 - While in Florida for a bowl game, Black players on an integrated California college football team are banned from lodging with their teammates in a segregated hotel";
infoArray[12][11] ="1917 - Thirteen Black soldiers are executed after Houston police beat and shoot Black troops, prompting 156 soldiers to revolt; in all, 13 soldiers are hanged and 43 sentenced to life in prison";
infoArray[12][12] ="1922 - A mob of more than 1,000 white people in Taylor County, Florida, kills Arthur Young days after burning Charles Wright to death; both Black men were accused of murder and lynched without a trial";
infoArray[12][13] ="1893 - A Tennessee judge jails a multiracial family for violating state laws against interracial relationships";
infoArray[12][14] ="1948 - After two 12-year-old white girls report being attacked by a Black man, police in Maryland arrest 17 'suspects'; the girls later admit to making up the attack";
infoArray[12][15] ="1897 -Four hundred white men lynch Tom Waller in Lawrence County, Mississippi, days after lynching another Black man for the same alleged crime";
infoArray[12][16] ="1945 - Days after a Black family refuses to leave their white Fontana, California, neighborhood, an explosion destroys their home and kills all four family members";
infoArray[12][17] ="1862 - Union General Ulysses S. Grant expels Jewish people from Tennessee based on anti-Semitic prejudice but later rescinds the order at President Abraham Lincoln's request";
infoArray[12][18] ="1952 - Georgia Gov. Herman Talmadge proposes abolishing public schools in the state if the Supreme Court mandates racial integration";
infoArray[12][19] ="1865 - South Carolina passes a law requiring Black 'servants' to enter into labor contracts with white 'masters,'' work from dawn to dusk, and maintain a 'polite' demeanor";
infoArray[12][20] ="1986 - Michael Griffith, a 23-year-old Black man, is hit by a car and killed after a white mob chases him onto a highway in Howard Beach, New York";
infoArray[12][21] ="1837 - Officials overwhelmingly approve a rule barring the U.S. House of Representatives from discussing the abolition of slavery";
infoArray[12][22] ="1853 - The sheriff in Macon County, Alabama, advertises in the local newspaper that a 23-year-old enslaved Black man named Bob will be sold by court order to settle a white man's debt";
infoArray[12][23] ="1946 - The all-white University of Tennessee basketball team refuses to play against Duquesne University because the team includes one Black player";
infoArray[12][24] ="1865 - A group of Confederate Army veterans establishes the Ku Klux Klan in Pulaski, Tennessee";
infoArray[12][25] ="1956 - Civil rights leader the Rev. Fred Shuttlesworth survives the bombing of his Birmingham, Alabama, home by the Ku Klux Klan-the first of five attempts on his life over the next seven years";
infoArray[12][26] ="1862 - Federal officials hang 38 Dakota men in Mankato, Minnesota, in one of the largest mass executions in American history";
infoArray[12][27] ="1919 - Near Franklinton, North Carolina, a mob of white men lynches a 23-year-old Black World War I veteran named Powell Green";
infoArray[12][28] ="1956 - Rosa Jordan, a pregnant African American resident of Montgomery, Alabama, is shot in both legs while riding a desegregated bus after the Montgomery Bus Boycott";
infoArray[12][29] ="1890 - U.S. Army troops massacre more than 300 Lakota men, women, and children near Wounded Knee Creek on the Lakota Pine Ridge Indian Reservation in South Dakota";
infoArray[12][30] ="1767 - The ship Susannah docks in Savannah, Georgia, and delivers 90 kidnapped Africans to be sold into slavery after 20 Africans died during the";



var jan = `After the Supreme Court struck down racial segregation in public schools in Brown v. Board of Education of Topeka on May 17, 1954, many white Americans violently resisted integration by harassing and attacking Black students while their children watched or participated.

 At the time, up to a quarter of white Southerners admitted to pollsters that they "favored violence, if necessary, to prevent school desegregation."
 
 Integration was met with violent opposition almost every year after Brown: Milford, Delaware, in 1954; Hoxie, Arkansas, in 1955; Tuscaloosa, Alabama, Clinton, Tennessee, Mansfield, Texas, and Clay and Sturgis communities in Kentucky in 1956; Little Rock and Nashville in 1957; Clinton (again) in
 
 1958; New Orleans in 1960; Athens, Georgia, in 1961; Oxford,
 
 Mississippi in 1962; and Birmingham in 1963.
 
 Violent resistance to school desegregation persisted for more than a decade. In 1966, when 450 Black students in Grenada, Mississippi, enrolled in public school following a court order to desegregate, local white leaders threatened to fire or evict their parents, and 200 Black students withdrew.
 
 The Black students who arrived on September 12, 1966, faced a white mob that chased them through the streets and beat them with chains, pipes, and clubs so severely that some had to be hospitalized. The mob violence continued for days without intervention from law enforcement.
 
 In 1967, 13 years after Brown, a report by the U.S. Commission on Civil Rights observed that "violence against Ne-groes continues to be a deterrent to school.
 
 desegregation."`;



 var feb = `Slavery in New England began in the 1630s when European colonizers enslaved more than 1,500 Pequot men, women, and children in Massachusetts, Rhode Island, and Connecticut.

 When famine and disease ravaged Indigenous populations, Europeans kidnapped people from Africa and trafficked them to the colonies, where they were subjected to extreme violence and brutality. In 1641, Massachusetts became the first Northern colony to formally legalize slavery.
 
 The Transatlantic Slave Trade soon be-
 
 Came a massive international enterprise, and colonies in New England played a critical role. Between 1678 and 1807, at least 314 trafficking voyages landed in New England ports. Over 40,000 kidnapped Africans were trafficked into slavery in the Americas during these voyages, including at least 5,000 into New England. Thousands of kidnapped Africans-nearly 15% of all those trafficked-died during the Middle Passage, the harrowing journey from Africa to the Americas.
 
 Northern colonies founded on ideals of equality and freedom used slavery to finance their growing economies. Shipbuilding, manufacturing, insurance, banking, and commerce in the North relied heavily on the enslavement and exploitation of Black people.
 
 White New Englanders exploited slavery in everyday life as well. By 1730, nearly half of all New York City residents
 
 a Personally enslaved Black people higher percentage than any colonial city except Charleston, South Carolina. By 1754, enslaved people made up 10% of the population in Boston, and by the start of the Revolutionary War, one in four households in Connecticut enslaved at least one Black person.`;



 var mar = `In the 19th century, the U.S. government systematically carried out cultural genocide by forcing Indigenous children into boarding schools, outlawing cultural practices, and violently quashing attempts to preserve Indigenous customs.

 Through the Civilization Fund Act, passed on March 3, 1819, the government.
 
 Partnered with missionaries and churches to "Christianize" Indigenous children by sending them to off-reser-vation boarding schools where they were given English names, forced to cut their hair, forbidden from speaking their Native languages, and left vulnerable to physical and sexual abuse. The federal government made attendance at such schools compulsory in 1891.
 
 The 1883 Code of Indian Offenses further targeted entire Indigenous populations, banning all Indigenous dances and ceremonies, potlatch gift-giving gatherings, and practices of medicine persons, among other customs.
 
 By 1885, 48 of the 60 federal "Indian" agencies had established police units that supplanted federal troops and sought to sow divisions by using Indigenous officers to police their communities. Agency police were re-.
 
 responsible for rounding up children to be taken to boarding schools-
 
 Though some resigned instead-and for arrest-ing people who practiced Indigenous
 
 Customs. In 1890, agency police fatally shot Lakota Chief Sitting Bull while attempting to arrest him for his involvement in the Ghost Dance, a spiritual movement against assimilation. Days later, federal troops massacred over 300 Lakota women, men, and children at Wounded Knee Creek.`;
 


var apr = `White Americans and Europeans have long used pseudoscientific ideas and language to support theories of white supremacy and racial hierarchy. Poly-genism, the idea

 Separate species with their origins gained prominence in the 18th century. White scientists then
 
 Developed theories by comparing skull circumference, nose width, and even toe length to promote the idea that white people were not only biologically distinct but inherently superior.
 
 In the U.S., proponents of slavery relied on scientific racism to argue that Black people were naturally suited to enslavement. When the 1840 Census erroneously claimed that much higher rates of "insanity and idiocy" existed among free Black people in the North than their enslaved counterparts, Southerners claimed that enslavement protected intellectually inferior Black people.
 
 Dr. Samuel Cartwright labeled Black people who attempted to escape slavery as mentally ill. In 1851, the Mississippi physician called the disorder drapetomania ("runaway slave mania") and advised whipping and amputation as
 
 Preventative measures. Drapetoma-nia was included in
 
 Medical dictionaries as late as 1914.
 
 While modern genetics has shown that there is no biological basis for race, the legacy of scientific racism continues to affect the practice of medicine. A 2016 study from the University of Virginia found that a significant portion of medical students and residents held false beliefs about biological differences between Black and white patients, such as that Black patients have thicker skin than white patients.`;




 var may = `During the Gold Rush of 1849, people from China joined the flow of migrants to the West Coast. White Americans denounced Chinese immigrants as racially inferior and blamed them for

 White unemployment and depressed wages. Major newspapers
 
 Published anti-Chinese ads, articles, and cartoons, and states restricted employment, education, and land ownership for Asian immigrants.
 
 Beginning in 1875, Congress passed a series of racist immigration laws to bar Chinese immigrants. In 1882, the Chinese Exclusion Act barred Chinese immigrants for ten years and prohibited them from becoming citizens. Soon after, racist violence in Wyoming and Idaho left Chinese immigrants dead, wounded, and fleeing their homes.
 
 Congress extended and strengthened the act numerous times. In 1888, the Scott Act prohibited long-term legal residents of Chinese descent from re-turning if they left the U.S. In 1892, the Geary Act required Chinese residents to carry resident permits or face deportation or imprisonment for hard labor.
 
 Racist immigration laws were extended to all people of Asian descent. In 1917, Congress prohibited immigration from the "Asiatic Barred Zone." In 1924, President Calvin Coolidge, remarking that "America must remain American," signed the Immigration Act of 1924, which barred all immigration from Asia, including Japan, and established an immigration quota system that would stand until 1965.
 
 Anti-Asian racial bigotry remains prevalent today. Hate crimes targeting the Asian American community have surged in recent years, increasing by more than 300% in 2021.`;
 


 var jun = `The Black church has long been cen-tral to Black culture in America, a sym-bol of

 Independence, social uplift, liberation, strength, and revolution. During the Civil
 
 Rights Movement and protests like the Montgomery Bus Boycott were organized at Black churches.
 
 That made Black churches a target for white fear, anger, and violence. On September 15, 1963, white men fire-bombed the Sixteenth Street Baptist Church, the largest Black church in Birmingham, Alabama, murdering four young Black girls. By the late 1990s, at least 80 Black churches throughout the South had been burned, fire-bombed, or vandalized.
 
 The targeting of Black churches dates back to the 19th century. In 1822, after Denmark Vesey was executed for planning a rebellion of enslaved people in Charleston, South Carolina, white residents burned down the African Methodist Episcopal Church where Vesey had preached about freedom.
 
 Two centuries later, on June 17, 2015, a white gunman motivated by white supremacy entered the rebuilt "Mother Emanuel" and opened fire on a Bible study group, killing nine Black worshippers, including the church's senior pastor, the Rev. Clementa Pinckney.
 
 Racially motivated attacks still target the Black church today. Over ten days in the spring of 2019, arson attacks in St. Landry Parish, Louisiana, destroyed three historically Black churches that had been essential centers of the Black community for more than a century.
 
 Despite facing unrelenting violence, the Black church persists, inspiring and holding up people engaged in the struggle for racial equality.`;
 


 var jul = `In Black Reconstruction in America (1935), W.E.B. Du Bois wrote, "One cannot study Reconstruction without first frankly facing the facts of universal lying." In a chapter entitled "The Propaganda of History," he exposed how most textbooks' portrayal of Reconstruction as a failure caused by Black people's inherent incapacity for self-government was a gross distortion in service of white supremacy.

 American history textbooks had pro-moted racial hierarchy since the 19th century when they centered the nation's history on white people and relocated Indigenous "savages" and Black people to permanently inferior status.
 
 In the 20th century, racial bigotry pervaded history books used in many schools. A 1927 history textbook argued, "Nothing is more certain than that the Fathers of the Republic in-tended
 
 America to be a 'white man's country." The first page of the American
 
 History (1930) defined history as "The Story of the White Man."
 
 Most textbooks, if they mentioned slavery at all, romanticized it, minimized its horrors, and depicted enslaved people as happy and child-like. Child's History of North Carolina (ca. 1916) taught that enslaved people "were allowed all the freedom they seemed to want, and were given the privilege of visiting other plantations when they chose to do so. All that was required of them was to be in place when work time came."
 
 These textbooks were produced by the nation's leading publishing houses, but as historian Eric Foner decried, "Neither the historical profession nor the publishing industry has fully acknowledged its decades-long complicity in disseminating the poisonous idea that Black Americans are unfit for participation in American democracy."`;
 
 


 var aug = `White resentment of potential social, political, and economic gains for Black people and the desire to uphold white supremacy after the Civil War fueled racial terror violence and mass lynchings well into the 20th century.

 During the Red Summer of 1919, violence by mobs of white people, often intentionally mischaracterized by the mainstream press as "race riots," led to the lynchings of hundreds of Black people around the country, including in Chicago, Washington, and Omaha.
 
 In Elaine, Arkansas, white mobs brutally targeted and killed hundreds of Black people after a Black labor union met to organize for fairer crop payments. Many military veterans returning from fighting
 
 For freedom in World War I, they were also targets of racial terror violence in 1919.
 
 White mobs also destroyed Black property and communities, often forcing the entire Black population to flee. In Ocoee, Florida, white people used terror and violence to stop Black citizens from voting on November 2, 1920. They lynched dozens of Black residents in the two-day massacre, including Julius Perry, who had protected another Black man from armed white men at the polls. At least 25 Black homes, two churches, and a Masonic lodge were destroyed by arson during the rampage. The entire Black community was driven out within a year, and no Black Americans resided in Ocoee for the next 60 years.
 
 The lynching of two Black couples near Moore's Ford Bridge in Walton County, Georgia, in 1946 exemplified the terrifying racial violence that continues to haunt Black communities to this day.`;
 
 
 


 var sep = `Immigration soared throughout the 19th and early 20th centuries when the U.S. saw an influx of European, Asian, and Mexican immigrants. White Americans responded to high rates of immigration with violence, exclusionary laws, and race-based deportations targeting immigrants of color.

 During the Great Depression, Secretary of Labor William Doak ordered the deportation of Mexican immigrants, the majority of whom were American citizens, under the guise of increasing job opportunities for white Americans.
 
 Later, in 1954, the federal government executed "Operation Wetback," using the derogatory term "wetback" to refer to Mexican immigrants. The operation led
 
 to the removal of nearly one million Mexican
 
 Immigrants, the largest mass deportation in U.S. history.
 
 In response to the attacks on 9/11, Congress passed a series of laws that severely restricted the rights of immigrants, targeted Muslims and people from the Middle East for expedited deportations, and established the U.S. Immigration and Customs Enforcement agency.
 
 Today, the majority of immigrants are colored people from Mexico, Guatemala, Honduras, El Salvador, India, and China. Immigrants of color are deported in far higher numbers than white European immigrants.
 
 In September 2021, more than 10,000 Haitians seeking asylum at the U.S.-Mexico border were violently corralled by U.S. Border Patrol agents on horseback. The White House called images of agents on horses chasing Haitian migrants along the
 
 The Rio Grande "horrific," but the federal government deported tens of thousands of people to Haiti in the months that followed.`;

 

 var oct = `In the late 19th and early 20th centuries, states in the South passed laws to enforce the strict boundaries of a legalized racial caste system, including during the provision of health services.

 In 1915, Alabama prohibited "white female nurses" from working "in wards or rooms in hospitals, either public or private, in which negro men are placed for treatment, or to be nursed." While institutional barriers limited the number of Black people able to become doctors and nurses in Alabama, laws like this
 
 Inflicted further harm by relocating Black patients to overcrowded, under-resourced basement wards in segregated hospitals and sometimes by denying them care altogether.
 
 In 1931, Fisk University Dean Juliette Derricotte was driving three students to her parent's home in Atlanta when an older white man suddenly swerved and struck her car, causing it to overturn into a ditch. The nearby Hamilton Memorial Hospital in Dalton, Georgia, refused to admit Dean Derricotte and her student, Nina Johnson, who had suffered critical injuries. By the time a hospital in Chattanooga agreed to treat them, it was too late. Dean Derri-cotte died during the trip, and Ms. Johnson died the next day.
 
 The medical community has not meaningfully confronted its history of racial segregation and bias. As a result, Black Americans today are
 
 Be uninsured more than white Americans. Black infants have more than twice the mortality rate of white infants. A 2021 study found that Black women are five times more likely than white women to die from pregnancy-related cardiomyopathy and blood pressure disorders and more than twice as likely to die of hemorrhaging or embolisms.`;
 



 var nov = `In the spring of 1927, the Mississippi River flooded, creating a torrent of water 50 miles wide and 100 miles long. One of the places hit hardest was Greenville, Mississippi, a town in the Mississippi Delta, where tens of thousands of Black people had lived and worked on cotton plantations for generations, producing great wealth for white landowners under enslavement and later under the cruel,

 exploitive sharecropping system.
 
 As the river rose, Greenville police rounded up Black men and children and forced them at gunpoint to reinforce the levee while white residents were evacuated to safety. Plans to evacuate Black residents were scuttled by white planters, fearful of losing their labor force. National Guardsmen instead prevented Black people from fleeing as the levee failed and people were washed away.
 
 More than 10,000 Black refugees were crowded on an eight-foot-wide stretch of high ground along the river with no tents or sanitary facilities and very little food. They were not allowed to leave.
 
 When Red Cross supplies arrived, police forced Black people to perform disaster relief work, including distributing supplies to white residents who took what they wanted first. When a Black man objected to working back-to-
 
 Back shifts, he was shot and killed on his front porch. Tens
 
 Thousands of African Americans fled the Delta when the floodwaters receded.
 
 Nearly a century later, when the Mississippi River flooded New Orleans during Hurricane Katrina, tens of thousands of Black residents suffered bru-tally, and hundreds died, swept away by rising waters, abandoned without food and water for days, and murdered by white vigilantes and police.`;
 


 var dec = `For decades, Black athletes faced discrimination, humiliation, and abuse in professional and amateur sports.

 Before Jackie Robinson integrated Major League Baseball in 1947, he and other Black players were humiliated at a sham tryout for the Boston Red Sox, whose managers hurled racial slurs at them and
 
 We sent them home without a contract. The Red Sox would not have a Black player for another 14 years.
 
 Chuck Cooper, the first Black player in the NBA, played in college for Duquesne University. In 1946, at a game against the University of Tennessee's all-white team, Tennessee's coach and players walked off the court and forfeited the game rather than play against a Black player. Tennessee did not have a Black player for nearly two more decades.
 
 The Black athletes who bravely broke down these barriers were subjected to persistent abuse, harassment, and even death threats. Even after most sports were racially integrated at the professional level, racial segregation persisted in many parts of the country, barring Black and white players from dining or lodging together and, in some instances, from even appearing on the field together.
 
 Despite the abuse they encountered, Jackie Robinson, Chuck Cooper, Bill Russell, and countless other pioneers bravely stood up for racial equality and civil rights in American sports and beyond.
 
 These courageous Black athletes inspired generations of athlete activism, from Olympians like Wilma Rudolph to tennis stars Arthur Ashe and Serena Williams.`;
 
 
 


var descriptionArray = [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec];

var descriptionTitleArray = ["Violent Resistance to School Desegregation",
                             "Slavery in the North",
                             "Federal Destruction of Indigenous Cultures",
                             "Science to Justify Racial Hierachy",
                             "Anti-Asian Immigration Laws",
                             "Violence Against the Black Church",
                             "The Racist Teaching of History",
                             "Mass Lynchings in the 20th Century",
                             "Racist Deportations",
                             "Segg=regation and Health",
                             "Racial Violence and Disaster Relief",
                             "Racial Bigotry in Sports"];


updateMonth();
updateDayOfTheMonth();
updateDayOfTheWeek();
updateDescriptionText();
updateDescriptionTitle();
updateInfo();





function updateMonth(){
    monthToday.innerHTML = months[dateToday.getMonth()];
 }
 function updateDayOfTheMonth(){
     dayOfTheMonth.innerHTML = dateToday.getDate();
 }
 function updateDayOfTheWeek(){
     dayOfTheWeek.innerHTML = days[dateToday.getDay()];
 }
 function updateDescriptionText(){
     descriptionText.innerHTML = descriptionArray[dateToday.getMonth()]/*.substring(0, 700) + "\n...Read More"*/;
 }
 function updateDescriptionTitle(){
     descriptionTitle.innerHTML = descriptionTitleArray[dateToday.getMonth()];
 }
 function updateInfo(){
    info.innerHTML = infoArray[dateToday.getMonth()+1][dateToday.getDate()];
 }


console.log("end");







