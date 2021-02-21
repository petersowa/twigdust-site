import { useContext } from 'react';
import { connect } from 'react-redux';

import { actionInc, actionDec } from '../redux/store';
import Status from '../components/Status';
import { AppContext } from '../context/global';

function Button(props: { body: string; [key: string]: any }) {
	const { body, ...rest } = props;
	return (
		<button className="btn btn-sq" {...rest}>
			{body}
		</button>
	);
}

function App(props: any) {
	let { state, actions } = useContext(AppContext);

	return (
		<>
			<div>
				<h1>App Body</h1>
				<div className="controls-h">
					<button className="btn btn-sq" onClick={() => props.actionDec()}>
						-
					</button>
					<Button body="+" onClick={() => props.actionInc()} />
					<Button
						className="btn"
						body="New Title"
						onClick={() => actions.updateTitle!({ title: 'New App' })}
					/>
					<Button
						className="btn"
						body="Clear Title"
						onClick={() => actions.clearTitle!()}
					/>
					<Button
						className="btn"
						body="Reverse Title"
						onClick={() => actions.reverseTitle!()}
					/>
				</div>

				<label htmlFor="appName"></label>
				<input
					name="appName"
					type="text"
					value={state.title}
					onChange={(event) => {
						console.log(event.target.value);
						actions.updateTitle!({ title: event.target.value });
					}}
				></input>

				<Status></Status>

				<ul className="list-nd">
					<li>
						<p className="">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
							corrupti dicta reprehenderit deserunt numquam debitis nostrum
							fugiat hic optio! Natus ab culpa aliquam, ipsum possimus at sequi
							optio quam! Nihil sit voluptas beatae obcaecati minus sunt, quasi
							illum libero ipsam distinctio quod ducimus rem vitae. Ratione
							eveniet repellendus magnam deleniti, aliquam, asperiores veniam,
							nam fuga cupiditate vitae libero. Magnam accusamus similique,
							architecto commodi ipsa, accusantium libero molestiae et
							dignissimos quos ex, eos fuga quasi omnis nobis asperiores cumque
							enim provident. Impedit, sed omnis soluta repellendus corporis
							sapiente quisquam quibusdam harum repudiandae nulla similique
							reiciendis quas at rerum veritatis laboriosam, cupiditate cum iure
							dolor voluptates quaerat aut sunt. Sed veniam cupiditate modi!
							Obcaecati mollitia iste, debitis ipsum architecto tenetur
							accusantium delectus sunt, consequatur recusandae velit aspernatur
							cupiditate fugiat explicabo ipsa aperiam nostrum, laborum quisquam
							expedita placeat dignissimos magni maxime! Natus placeat iusto
							sapiente voluptatem at nulla dolores neque repudiandae impedit
							voluptas?
						</p>
						<div className="controls-h">
							<button className="btn btn-p cta">Order</button>
							<button className="btn">Order</button>
						</div>
					</li>
					<li>
						<p>
							Explicabo voluptatum nihil libero nam et doloremque fuga delectus
							laborum. Ullam deleniti sapiente distinctio temporibus modi
							architecto exercitationem eius, dolore amet reprehenderit
							voluptatibus eveniet, praesentium debitis illo voluptatum vero
							rerum enim sed. Laudantium dolores labore nisi culpa possimus
							optio magnam et corporis quam voluptate laborum pariatur
							aspernatur quaerat, laboriosam non, est cupiditate veritatis id
							tempora quis repellat, placeat vel atque molestias! Aut aperiam ut
							officiis alias iure repudiandae cumque, neque assumenda quidem,
							voluptatibus similique sed! Impedit illum pariatur architecto at
							similique? Saepe esse facere incidunt. Voluptatum assumenda, magni
							earum dicta aspernatur provident quaerat sit excepturi
							voluptatibus magnam in porro, aliquam quam ipsum nesciunt a
							aliquid? Vitae deleniti optio inventore odio a accusantium
							delectus eius officia numquam ducimus ex eum itaque iste maxime
							perspiciatis amet, ut voluptatem animi unde laborum. Consectetur
							rem maxime accusamus earum. Fugit soluta eius non placeat quasi
							corporis dicta, explicabo expedita sunt nisi at nihil ducimus
							commodi?
						</p>
					</li>
					<li>
						<p>
							Ipsum beatae dignissimos, quam error alias architecto illo nam
							suscipit dolore distinctio placeat laudantium quisquam eligendi
							quaerat minima repellat! Quasi iure laborum quisquam ex rem sequi,
							quaerat delectus alias nam obcaecati, explicabo molestiae
							laboriosam dignissimos qui ipsam incidunt! Est a rem debitis
							cupiditate possimus sunt et pariatur placeat voluptatem! Odit
							voluptatibus est ullam incidunt nihil architecto molestias nobis
							nisi quasi. Nemo aut impedit natus quasi explicabo error eligendi
							odit maxime? Dolorum dolores, voluptatem officia, facere commodi
							libero omnis consequuntur autem, dolor expedita sint rerum
							assumenda a ratione maiores minus rem? Facere, tenetur. Nulla
							impedit quo cupiditate aliquid sit? Cupiditate adipisci totam
							libero magnam ad tempora numquam commodi inventore eligendi
							perspiciatis non minima alias possimus aperiam nobis porro, earum
							labore, facilis suscipit. Autem eius rem eaque labore molestias
							ipsam veniam, commodi doloribus dolore veritatis consectetur
							itaque similique fugiat omnis quisquam minima ab magnam aliquid
							nulla nobis incidunt non neque corporis inventore.
						</p>
					</li>
					<li>
						<p>
							Veniam quia alias dolore qui facilis, aperiam, quis expedita sed
							necessitatibus accusantium distinctio vel voluptate unde, ex
							corporis ullam deserunt porro nihil voluptatum cum beatae facere!
							Veritatis, optio, tempore molestiae fugit repellendus vitae ut
							atque similique excepturi, quos a nisi dolores eaque reprehenderit
							nobis repellat odit velit earum porro quidem nesciunt soluta.
							Dolorem odit ad repudiandae excepturi vel, commodi illum animi
							aspernatur voluptatibus quo nihil nisi reprehenderit architecto
							nostrum quas exercitationem similique, accusamus id distinctio
							deleniti. Laborum, quisquam obcaecati! Sit accusantium dignissimos
							ipsa saepe consequatur provident nulla autem error soluta, facilis
							excepturi beatae laboriosam esse quaerat? Praesentium,
							repudiandae. Officia iste explicabo aperiam temporibus tempore
							culpa veniam quae saepe eum tenetur. Dolorum inventore sit, nisi
							ratione aperiam odit delectus dolorem distinctio, deleniti ipsum
							nam cumque minus ullam rerum aliquid. Eligendi illum culpa
							excepturi animi sint expedita eius. Aliquam, pariatur commodi
							itaque voluptate corporis, magnam dolor voluptatum nulla quis
							quam, blanditiis vitae.
						</p>
					</li>
					<li>
						<p>
							Animi reprehenderit accusantium vitae nesciunt aut doloribus,
							doloremque mollitia, dolorem quaerat culpa facere magnam
							perferendis fuga dolore incidunt minus quisquam numquam. Suscipit,
							sed? Dolore, esse suscipit vero corporis nihil illum eius quo ipsa
							debitis sint sit aperiam odio vitae possimus accusantium et quis
							numquam deleniti delectus tempora fugiat aspernatur ipsum sapiente
							enim? Alias itaque, labore voluptate corporis quaerat commodi
							fuga? Soluta, mollitia molestias. Numquam ducimus voluptate maxime
							commodi quo fugiat maiores atque. Officiis optio et consectetur.
							Eaque vero rerum quia sunt reprehenderit. Laboriosam, inventore.
							Consectetur culpa modi ipsum, accusantium voluptatem dicta
							laboriosam impedit asperiores iste. Suscipit, unde enim. Explicabo
							asperiores fugit consequuntur similique, fugiat corporis corrupti
							modi hic recusandae dolorum libero rem error beatae repellendus,
							voluptate natus illo totam, harum eligendi soluta. Quos, quasi
							assumenda hic quod ad dignissimos totam aspernatur suscipit
							aliquid qui! Expedita quis eos, et provident aut consequatur alias
							omnis. Temporibus autem facere ipsa tempora ratione voluptate?
						</p>
					</li>
				</ul>
			</div>
		</>
	);
}

export default connect(
	(state: { value: number }) => ({
		counter: state.value,
	}),
	{ actionInc, actionDec }
)(App);
