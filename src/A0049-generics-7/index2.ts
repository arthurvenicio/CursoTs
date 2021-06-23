//Record
const object: Record<string, string | number> = {
    firstName: 'Arthur',
    lastName: 'Venicio',
    age: 18,
};

console.log(object);

type procolPerson = {
    firstName?: string;
    lastName?: string;
    age?: number;
};

//Required
type RequiredPerson = Required<procolPerson>;
// Partial
type PartialPerson = Partial<RequiredPerson>;
// Readonly
type ReadonlyPerson = Readonly<procolPerson>;
//Pick
type PickPerson = Pick<procolPerson, 'firstName' | 'lastName'>;

const object2: RequiredPerson = {
    firstName: 'Arthur',
    lastName: 'Venicio',
    age: 18,
};

console.log(object2);

//Exclude and Extract
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type ExlcudeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

//
type AccountMongo = {
    _id: string;
    name: string;
    age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};

const accountMongo: AccountMongo = {
    _id: 'aldwakdkasdsalsadldslads',
    name: 'Jose',
    age: 50,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

export default 1;
