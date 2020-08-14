<template>
    <div>
        <h1>Array 1: texasss</h1>
        <p>Part 1 - Find all users older than 24</p>
        <p>{{users24}}</p>
        <p>Part 2 - Find the total age of all users</p>
        <p>{{totalAge}}</p>
        <p>Part 3 - List all users in the US</p>
        <div v-for="(user, index) in usersUS" :key="`UsersUS ${index}`">
            <p><span>{{user.name}}</span> <span> US:</span> <span>{{user.us}}</span></p>
        </div>

        <h1>Array 2: newieyork</h1>
        <p>Part 1 - List all users in US in ascending order</p>
        <div v-for="(user, index) in sortedUS" :key="`SortedUS ${index}`">
            <p>{{user.name}}</p>
        </div>
        <p>Part 2 - Sort all users by age</p>
        <div v-for="(user, index) in sortedAge" :key="`sortedAge ${index}`">
            <p>{{user.name}}<span> Age: </span> <span>{{user.age}}</span></p> 
        </div>
        <p>Part 3 -  List all female coders</p>
        <div v-for="(user, index) in femaleCoders" :key="`femaleCoders ${index}`">
            <p>{{user.name}}<span> gender: </span> <span>{{user.gender === 'f' ? 'female': null}}</span></p> 
        </div>

        <h1>Array 3: vegzas</h1>
        <p>Part 1 - Find the total age of male coders under 25</p>
        <p>{{maleCodersAge}}</p>
        <p>Part 2 - List all male coders over 30</p>
        <div v-for="(user, index) in maleCodersOver30" :key="`maleCodersOver30 ${index}`">
            <p>{{user.name}}<span> gender: </span> <span>{{user.gender === 'm' ? 'male': null}}</span></p> 
        </div>
        <p>Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.</p>
        <p>{{totalAges}}</p>
    </div>
</template>

<script>
    export default {
        props: [],

        components: {},

        data() {
            return {
                // ARRAY 1
                texasss : [
                    {
                        name: 'Mike',
                        age: 23,
                        gender: 'm',
                        us: false,
                    },
                    {
                        name: 'Liz',
                        age: 20,
                        gender: 'f',
                        us: true,
                    },
                    {
                        name: 'Chris',
                        age: 102,
                        gender: 'm',
                        us: true,
                    },
                    {
                        name: 'Chuloo',
                        age: 27,
                        gender: 'm',
                        us: false,
                    },
                    {
                        name: 'Annie',
                        age: 30,
                        gender: 'f',
                        us: true,
                    },
                ],

                // ARRAY 2
                newieyork: [
                    {
                        name: 'Michelle',
                        age: 65,
                        coder:true,
                        gender: 'f',
                        us: true,
                    },
                    {
                        name: 'Sam',
                        age: 25,
                        coder:false,
                        gender: 'm',
                        us: false,
                    },
                    {
                        name: 'Ivy',
                        age: 26,
                        coder:true,
                        gender: 'f',
                        us: false,
                    },
                    {
                        name: 'Nick',
                        age: 32,
                        coder:true,
                        gender: 'm',
                        us: true,
                    },
                    {
                        name: 'Jim',
                        age: 17,
                        coder:false,
                        gender: 'm',
                        us: true,
                    },
                ],

                // ARRAY 3
                vegzas : [
                    {
                        name: 'Charly',
                        age: 22,
                        coder:true,
                        gender: 'm',
                    },
                    {
                        name: 'Law',
                        age: 21,
                        coder:true,
                        gender: 'm',
                    },
                    {
                        name: 'Rosey',
                        age: 42,
                        coder:false,
                        gender: 'f',
                    },
                    {
                        name: 'Steph',
                        age: 18,
                        coder:true,
                        gender:'f'
                    },
                    {
                        name: 'Jon',
                        age: 47,
                        coder:false,
                        gender: 'm',
                    },
                ]
            }
        },

        computed: {
            // Part 1 - Find all users older than 24
            users24() {
                return this.texasss.filter((val) => val.age > 24);
            },

            // Part 2 - Find the total age of all users
            totalAge() {
                return this.texasss.map(user => user.age).reduce((prev, next)=> prev + next);
            },

            // Part 3 - List all users in the US
            usersUS() {
                return this.texasss.filter(user => user.us === true)
            },

            // Part 1 - List all users in US in ascending order
            sortedUS() {
                const temp = this.newieyork.slice(0);

                return temp.sort((a,b) => {
                    const x = a.name.toLowerCase();
                    const y = b.name.toLowerCase();
                    return x < y ? -1 : 1;
                })
            },

            // Part 2 - Sort all users by age
            sortedAge() {
                const temp = this.newieyork.slice(0);

                return temp.sort((a,b) => {
                    return a.age - b.age;
                })
            },

            // Part 3 -  List all female coders
            femaleCoders() {
                return this.newieyork.filter(
                    val => val.gender == 'f'
                )
            },

            // Part 1 - Find the total age of male coders under 25
            maleCodersAge() {
                return this.vegzas
                    .filter(user => user.age < 25 && user.gender === 'm')
                    .map(male => male.age)
                    .reduce((prev, next) => prev + next)
            },

            // Part 2 - List all male coders over 30
            maleCodersOver30() {
                return this.vegzas.filter(user => user.age > 30 && user.gender === 'm')
            },

            // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.
            totalAges() {
                const temp = [];

                this.texasss.map(val => temp.push(val.age));
                this.newieyork.map(val => temp.push(val.age));
                this.vegzas.map(val => temp.push(val.age));

                return temp.reduce((prev,next)=> prev + next);
            }
        },

        methods: {
            
        }
    }
</script>