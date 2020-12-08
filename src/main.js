import Moon from "moon";
import view from "view/index";
import "main.css";

Moon.use({
	data: Moon.data.driver,
	view: Moon.view.driver("#root")
});

Moon.run(() => {
	const data =0

	return {
		data,
		view: <view.add data=data/>
	};
});
